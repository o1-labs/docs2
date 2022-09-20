<img src="https://github.com/MinaProtocol/docs/blob/main/public/static/img/svg/mina-wordmark-redviolet.svg" width="350" alt="Mina logo">

# Mina Docs

## To view the docs

To view the Mina Docs website, visit [docs.minaprotocol.com](https://docs.minaprotocol.com/).

## To contribute content

Click the `Suggest changes` button at the bottom left of any page on [the docs website](https://docs.minaprotocol.com/) to edit that page and submit a pull request via Github.

## How to run during development

```sh
git clone https://github.com/o1-labs/docs2.git
npm install
npm run dev
```

## How to run in production

On the host:
- Set environment variables: `ALGOLIA_APP_ID` and `ALGOLIA_SEARCH_API_KEY` to appropriate values.
- Set build command: `npm run build`.
- Set output directory: `build`.
- Set install command: `npm ci`.
