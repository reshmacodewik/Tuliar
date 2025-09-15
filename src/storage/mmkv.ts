// storage.ts
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "app-storage",
  encryptionKey: "optional-32-char-secret", 
});

// Helpers for typed access
export const setItem = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const getItem = <T = any>(key: string): T | null => {
  const raw = storage.getString(key);
  return raw ? JSON.parse(raw) : null;
};

export const removeItem = (key: string) => {
  storage.delete(key);
};
