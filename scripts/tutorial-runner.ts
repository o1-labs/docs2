/**
 * This is a tiny CLI program, intended to be run by `ts-node`, which is designed for testing zkApp tutorials. It functions by
 *
 *   1. Extracting all of the code blocks from the tutorial Markdown file
 *   2. Iterating through each in order and
 *     - if it contains shell commands, executing them, else
 *     - if it contains code modifications, applying them
 *
 * In order to work properly with this runner, the following constraints around how code blocks are written must be satisfied.
 *
 * Each code block which contains commands the reader of the tutorial is expected to execute in their terminal, or code which the reader is expected to write in a file, contains an [**info string**](https://spec.commonmark.org/0.30/#info-string) of the form `sh` (if the code block contains shell commands meant for execution) or `${lang} ${filePath}` (if the code block contains code meant for writing, where `filePath` is the file path to be written to). Code blocks of any other form will be ignored by this runner.
 *
 * Furthermore, code blocks containing shell commands (those with `sh` info strings) must prepend each command that the runner ought to execute with `$ `. Other lines will be ignored, but may be used to indicate to the user what the expected result of running each command should look like (just note that this runner will not verify that that output is correct). Code blocks containing code to be written must have each line prepended with its line number, and each code block of this sort may only contain a single contiguous series of lines.
 *
 * Code blocks which satisfy the previous constraints, but which are contained in HTML comments (and are thus hidden in the rendered doc), will still be evaluated by this runner. This fact may be utilized to, for example, perform setup tasks which the reader is expected to have already completed in a previous tutorial.
 *
 * This program will exit with failure if any of the code block shell commands it executes return a non-zero exit code.
 */

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import sh from 'shelljs';
import fs from 'fs';
import path from 'path';

type CodeBlock = ShellCommands | CodePatch;

type ShellCommands = {
  lang: 'sh';
  commands: string[];
};

type CodePatch = {
  lang: 'ts';
  filePath: string;
  startLineNum: number;
  codeLines: string[];
};

yargs(hideBin(process.argv))
  .command(
    '$0',
    'Execute all of the code blocks in a tutorial in sequence, ensuring that each shell command executed returns a non-zero exit code.',
    {},
    (argv) => {
      if (process.env.GITHUB_ACTIONS !== 'true')
        throw 'This is only intended to be run in a GitHub Actions environment.';

      if (argv._[0] === undefined || typeof argv._[0] !== 'string') {
        throw "Provide the tutorial's file path as an argument";
      }
      const tutorialPath = argv._[0];
      const markdown = sh.cat(tutorialPath);

      const testDir = `test-${tutorialPath.replace(/\/|\./g, '-')}`;
      const pwd = sh.pwd().toString();

      try {
        sh.mkdir(testDir);
        sh.cd(testDir);

        // 1. Extract code blocks.
        const regex =
          /(?<=```)(?<infoString>[\w\/\. ]+?)\n(?<code>.+?)\n(?=```)/gs;
        const codeBlocks = Array.from(markdown.matchAll(regex)).map(
          regexMatchToCodeBlock
        );

        // 2. Simulate tutorial
        codeBlocks.forEach((codeBlock) => {
          if (codeBlock.lang === 'sh') {
            executeShellCommand(codeBlock);
          } else if (codeBlock.lang === 'ts') {
            applyCodePatch(codeBlock);
          }
        });
      } finally {
        sh.rm('-rf', path.join(pwd, testDir));
      }
    }
  )
  .parse();

function regexMatchToCodeBlock(match: RegExpMatchArray): CodeBlock {
  // The "info string" (https://spec.commonmark.org/0.30/#info-string) stores metadata about the code block.
  const infoString = match.groups.infoString;
  const infoStringSegments = infoString.split(' ');
  const [lang] = infoStringSegments;
  const code = match.groups.code;

  if (lang === 'ts') {
    const filePath: string | undefined = infoStringSegments[1];

    if (filePath) {
      const getLineNum = (codeLineWithNum: string): number =>
        parseInt(codeLineWithNum.match(/\d+/)[0]);
      const stripLineNum = (codeLineWithNum: string): string => {
        if (codeLineWithNum.match(/\d+$/)) {
          // If there's only a line number, the rest of the line is empty
          return '';
        } else {
          return codeLineWithNum.substring(codeLineWithNum.indexOf(' ') + 1);
        }
      };
      const codeLinesWithNums = code.split('\n');
      const startLineNum = getLineNum(codeLinesWithNums[0]);
      const codeLines = codeLinesWithNums.map((codeLineWithNum, index) => {
        if (startLineNum + index !== getLineNum(codeLineWithNum)) {
          throw (
            'Line numbers must be contiguous per code block.\n' +
            'Check the offending line:\n' +
            `${codeLineWithNum}\n` +
            `located in the code block with info string: '${infoString}'`
          );
        }
        return stripLineNum(codeLineWithNum);
      });

      return { lang, startLineNum, filePath, codeLines };
    } else {
      throw 'Code blocks describing file modifications must include a file path in their info string';
    }
  } else if (lang === 'sh') {
    const extractCommands = (shellCode: string[]): string[] =>
      shellCode.reduce<string[]>((commands, line) => {
        if (line.startsWith('$ ')) {
          return [...commands, line.slice(2)];
        } else {
          return commands;
        }
      }, []);

    const commands = extractCommands(code.split('\n'));

    return { lang, commands };
  } else {
    throw `Unexpected code block language '${lang}'`;
  }
}

function executeShellCommand(shellCommands: ShellCommands): void {
  shellCommands.commands.forEach((shellCommand) => {
    let exitCode;

    if (shellCommand.startsWith('zk project')) {
      const nonInteractiveCommand = `${shellCommand} --ui none`;

      logStep(`Executing '${nonInteractiveCommand}'…`);
      exitCode = sh.exec(nonInteractiveCommand).code;
    } else {
      logStep(`Executing '${shellCommand}'…`);

      exitCode = shellCommand.startsWith('cd ')
        ? sh.cd(shellCommand.slice(2)).code
        : sh.exec(shellCommand).code;
    }

    if (exitCode !== 0) {
      throw `Shell command returned non-zero exit code: '${exitCode}'`;
    }
  });
}

function applyCodePatch(codePatch: CodePatch): void {
  logStep(`Applying code patch to '${codePatch.filePath}'…`);

  const lines = fs
    .readFileSync(codePatch.filePath)
    .toString('utf8')
    .split('\n');

  codePatch.codeLines.forEach((codeLine, index) => {
    const lineNumIndex = codePatch.startLineNum - 1 + index;
    console.log(`${lineNumIndex + 1} ${codeLine}`);
    lines[lineNumIndex] = codeLine;
  });

  fs.writeFileSync(codePatch.filePath, lines.join('\n'));
}

function logStep(message: string): void {
  console.log(`\n### ${message}\n`);
}
