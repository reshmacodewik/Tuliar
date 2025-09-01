import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: "rq-cache",
  encryptionKey: "optional-32-char-secret", 
});
