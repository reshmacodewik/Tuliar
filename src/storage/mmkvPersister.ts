import type { Persister } from "@tanstack/query-persist-client-core";
import { storage } from "./mmkv";

const KEY = "REACT_QUERY_OFFLINE_CACHE";

export const mmkvPersister: Persister = {
  persistClient: async (client) => {
    try { storage.set(KEY, JSON.stringify(client)); } catch {}
  },
  restoreClient: async () => {
    try {
      const raw = storage.getString(KEY);
      return raw ? JSON.parse(raw) : undefined;
    } catch { return undefined; }
  },
  removeClient: async () => {
    try { storage.delete(KEY); } catch {}
  },
};