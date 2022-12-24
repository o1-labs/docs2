import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import sh from 'shelljs';
import fs from 'fs';

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
  .command('$0', 'Test a doc.', {}, (argv) => {
    // console.log('argv', argv);
    if (argv._[0] === undefined || typeof argv._[0] !== 'string') {
      throw "Provide the tutorial's file path as an argument";
    }
    const markdown = sh.cat(argv._[0]);
    // console.log('markdown', markdown);

    const testDir = 'test-dir';
    sh.mkdir(testDir);
    sh.cd(testDir);

    // 1. Extract code blocks.
    // Add note about what an "info string" is (link to CommonMark spec)
    const regex = /(?<=```)(?<infoString>[\w\/\. ]+?)\n(?<code>.+?)\n(?=```)/gs;
    // console.log(
    //   'markdown.matchAll(regex)',
    //   Array.from(markdown.matchAll(regex))
    // );
    const codeBlocks = Array.from(markdown.matchAll(regex)).map(
      regexMatchToCodeBlock
    );
    console.log('codeBlocks', codeBlocks);

    // 2. Simulate tutorial
    codeBlocks.forEach((codeBlock) => {
      if (codeBlock.lang === 'sh') {
        executeShellCommand(codeBlock);
      } else if (codeBlock.lang === 'ts') {
        applyCodePatch(codeBlock);
      }
    });
  })
  .parse();

function regexMatchToCodeBlock(match: RegExpMatchArray): CodeBlock {
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
    console.log(`Executing '${shellCommand}'…`);

    const exitCode = shellCommand.startsWith('cd ')
      ? sh.cd(shellCommand.slice(2)).code
      : sh.exec(shellCommand).code;

    if (exitCode !== 0) {
      throw `Shell command returned non-zero exit code: '${exitCode}'`;
    }
  });
}

function applyCodePatch(codePatch: CodePatch): void {
  console.log(`Applying code patch to '${codePatch.filePath}'…`);

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
