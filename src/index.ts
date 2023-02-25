export interface APP_DATA {
  [key: string]: any;
}

declare global {
  interface Window {
    __APP_DATA__: APP_DATA,
  }
}

export * from './contexts/FetchQueryContext';
export * from './contexts/FetchQueryProvider';

export * from './hooks/useFetchQuery';

export * from './utils/ssr.util';
export * from './utils/client.util';
export * from './utils/server.util';
