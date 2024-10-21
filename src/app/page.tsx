"use client";

import { useDocumentDataOnce } from "failurebase";
import { collection } from "firebase/firestore";
import { db } from "~/lib/firebase";

type User = {
  name: string;
};

export default function Home() {
  const user = useDocumentDataOnce<User>(collection(db, "users"), "123");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        User name: {user?.name}
      </main>
    </div>
  );
}
