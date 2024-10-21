import "client-only";
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientConfig = {
  projectId: "demo-project-id",
  apiKey: "demo-api-key",
  authDomain: "demo-auth-domain",
  databaseURL: "demo-database-url",
  messagingSenderId: "demo-messaging-sender-id",
};

const clientApp =
  getApps().length === 0 ? initializeApp(clientConfig) : getApps()[0];
export const auth = getAuth(clientApp);
export const storage = getStorage(clientApp);
export const db = getFirestore(clientApp);
