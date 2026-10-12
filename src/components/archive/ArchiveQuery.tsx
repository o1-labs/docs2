import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './ArchiveQuery.module.scss';

export const ARCHIVE_ENDPOINTS = {
  devnet: 'https://devnet-archive-node-api.gcp.o1test.net/',
  mainnet: 'https://archive-node-api.gcp.o1test.net/',
} as const;

type Network = keyof typeof ARCHIVE_ENDPOINTS;

interface Props {
  query: string;
  network?: Network;
  // Networks the reader may switch to. The data in some queries, such as a
  // zkApp address, exists on one network only.
  networks?: Network[];
}

type Result =
  | { state: 'idle' }
  | { state: 'running' }
  | { state: 'done'; body: string; ms: number }
  | { state: 'error'; message: string };

function graphiqlUrl(network: Network, query: string): string {
  // Yoga GraphiQL reads the initial query from `?query=`.
  const url = new URL(ARCHIVE_ENDPOINTS[network]);
  url.searchParams.set('query', query);
  return url.toString();
}

export default function ArchiveQuery({
  query: initialQuery,
  network: initialNetwork = 'devnet',
  networks = ['devnet', 'mainnet'],
}: Props): JSX.Element {
  const [network, setNetwork] = useState<Network>(initialNetwork);
  const [query, setQuery] = useState(initialQuery.trim());
  const [result, setResult] = useState<Result>({ state: 'idle' });

  async function run() {
    setResult({ state: 'running' });
    const started = performance.now();
    try {
      const response = await fetch(ARCHIVE_ENDPOINTS[network], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const text = await response.text();
      let body = text;
      try {
        body = JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        // Not JSON: show the raw response, for example a rate-limit page.
      }
      setResult({
        state: 'done',
        body: response.ok ? body : `HTTP ${response.status}\n${body}`,
        ms: Math.round(performance.now() - started),
      });
    } catch (error) {
      setResult({ state: 'error', message: String(error) });
    }
  }

  return (
    <div className={styles.archiveQuery}>
      <div className={styles.toolbar}>
        {networks.length > 1 ? (
          <div className={styles.networks} role="group" aria-label="Network">
            {networks.map((name) => (
              <button
                key={name}
                type="button"
                className={name === network ? styles.active : undefined}
                aria-pressed={name === network}
                onClick={() => setNetwork(name)}
              >
                {name}
              </button>
            ))}
          </div>
        ) : (
          <span className={styles.networkLabel}>{network}</span>
        )}
        <code className={styles.endpoint}>{ARCHIVE_ENDPOINTS[network]}</code>
      </div>
      <textarea
        className={styles.editor}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        spellCheck={false}
        rows={Math.min(query.split('\n').length + 1, 24)}
        aria-label="GraphQL query"
      />
      <div className={styles.actions}>
        <button
          type="button"
          className="button button--primary button--sm"
          onClick={run}
          disabled={result.state === 'running'}
        >
          {result.state === 'running' ? 'Running…' : 'Run query'}
        </button>
        <a
          className="button button--secondary button--sm"
          href={graphiqlUrl(network, query)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in GraphiQL
        </a>
        {result.state === 'done' && (
          <span className={styles.timing}>{result.ms} ms</span>
        )}
      </div>
      {result.state === 'done' && (
        <CodeBlock language="json" className={styles.result}>
          {result.body}
        </CodeBlock>
      )}
      {result.state === 'error' && (
        <div className="alert alert--danger">{result.message}</div>
      )}
    </div>
  );
}
