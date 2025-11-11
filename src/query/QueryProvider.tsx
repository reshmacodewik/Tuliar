// QueryProvider.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import {
  QueryClient,
  QueryCache,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import NetInfo from '@react-native-community/netinfo';
import { storage as mmkv } from '../storage/mmkv'; // <-- from step 1

function createMMKVStorage() {
  // TanStack expects a "sync storage" interface (string-only).
  const key = 'rq-cache';
  return createSyncStoragePersister({
    storage: {
      getItem: (k: string) => mmkv.getString(k) ?? null,
      setItem: (k: string, v: string) => mmkv.set(k, v),
      removeItem: (k: string) => mmkv.delete(k),
    },
    key,
    throttleTime: 1000, // reduce write frequency
    serialize: client => JSON.stringify(client),
    deserialize: str => JSON.parse(str),
  });
}

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (_err, _q) => {
            // handle/log if you like
          },
        }),
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 30_000,
            gcTime: 5 * 60 * 1000,
            refetchOnMount: 'always',
            refetchOnReconnect: true,
            refetchOnWindowFocus: true, // emulated via AppState below
          },
          mutations: { retry: 1 },
        },
      }),
  );

  // Foreground ↔ focus
  useEffect(() => {
    const sub = AppState.addEventListener('change', state => {
      focusManager.setFocused(state === 'active');
    });
    return () => sub.remove();
  }, []);

  // Connectivity → online state
  useEffect(() => {
    const unsub = NetInfo.addEventListener(state => {
      // If you prefer stricter detection: !!state.isConnected && !!state.isInternetReachable
      onlineManager.setOnline(Boolean(state.isConnected));
    });
    return () => unsub();
  }, []);

  return (
    <PersistQueryClientProvider
      client={client}
      persistOptions={{
        persister: createMMKVStorage(),
        maxAge: 24 * 60 * 60 * 1000, // 24h
        buster: 'v1',
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
