# Docs Contributing Guidelines

Welcome to the Mina Docs open source repository. Thank you for your interest in contributing to the [Mina Docs](https://docs.minaprotocol.com/) website. 

By contributing, you can help us improve the functionality and user experience of the docs which helps the users build better projects. To ensure a smooth and effective collaboration, please follow these contribution guidelines.

## Style Guidance

Technical documentation is a high-visibility interface with our community and our users. Well-written docs help our users discover, understand, and use the Mina Protocol and SnarkyJS.

Follow the style guidance in the [Docs Style Guide](https://github.com/o1-labs/docs2/wiki/Docs-Style-Guide) and recommended [Word List](https://github.com/o1-labs/docs2/wiki/Word-list) to ensure a consistent user experience. Look around. Match the style you see used in the rest of the project. 

## Get Involved

To learn about ways to participate and interact with community members, see [Online Communities](https://docs.minaprotocol.com/participate/online-communities). 

## Code of Conduct

All contributors agree to respect and follow the Mina Protocol [Code of Conduct](https://github.com/MinaProtocol/mina/blob/develop/CODE_OF_CONDUCT.md).

## Docs Toolset 

The [Mina Docs](https://docs.minaprotocol.com/) website is published with the Docusaurus static site generator. The docs source files are written in Markdown `.mdx` files that support Markdown with embedded components through the JSX syntax extension to JavaScript. Docusaurus has built-in support for MDX that renders the JSX in Markdown files as React components. 

Even if you're unfamiliar with Markdown, you can still contribute to the docs in a helpful and meaningful way. Use [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax) and look at existing docs for models to follow. You can start contributing by submitting fixes for typos, spelling, and broken links. 

## Using this repo

If you don't find what you are looking for or something in the docs is not working as expected, review existing [docs2 issues](https://github.com/o1-labs/docs2/issues/) on GitHub. Before you report a problem, take a look around and see if someone already opened an issue. If you are certain this is a new, unreported bug, submit a new issue to help us improve.

- One issue, one bug: Report a single bug per issue.
- If you're ready to fix a bug, it's fine to submit a pull request right away, but we still recommend filing an issue detailing what you're fixing. This workflow is helpful in case we don't accept that specific fix but want to keep track of the issue. 
- Provide steps to reproduce the bug, be sure to list all the steps necessary to reproduce the issue. 

## Reviewing Technical Content PRs

Some of the best content contributions come during the PR review cycles. Follow best practices for technical content PR reviews just like you do for code reviews.

- For in-line suggestions, use the [GitHub suggesting feature](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
  .
- The PR owner can merge in your suggested commits one at a time or in batch (preferred).
- When you are providing a more granular extensive review that results in more than 20 in-line suggestions, work with the PR owner to develop a workflow. You might decide together that as a reviewer, you can check out the branch and make the changes yourself.

## Pull Requests (PRs)

Provide a helpful, informative PR title that include the context and page you are updating. Each PR must address one issue or feature.

To provide a fix or update, make a direct contribution. If you're not a member or maintainer, fork the repo and then submit a pull request (PR) from your forked repo to the `main` branch.

Start by creating a [draft pull request](https://github.blog/2019-02-14-introducing-draft-pull-requests/). Create your draft PR early, even if your work is just beginning or incomplete. Your draft PR indicates to the community that you're working on something and provides a space for conversations early in the development process. Merging is blocked for `Draft` PRs, so they provide a safe place to experiment and invite comments.

All pull requests must get code reviewed. As the PR submitter, you must address each comment and suggestion in the **Files changed** view during the review process.

### Continuous Integration (CI)

During the documentation build process, each PR goes through Vercel CI to test the doc updates and build a preview of your changes. Vercel for GitHub automatically deploys and provides preview deployment URLs. After the PR status is ready, click **Visit Preview** and navigate to the changed page to see your doc updates. If you want to speed up the PR review process, you can add a link from the PR description to the updated preview deployment page URL.

### SnarkyJS Reference

The zkApp Developers > [SnarkyJS Reference](https://docs.minaprotocol.com/zkapps/snarkyjs-reference) docs are generated content and outside the scope of the Mina Docs repository. Updating the associated Markdown file is not supported.

Thank you for contributing to the Mina docs. It's better together.