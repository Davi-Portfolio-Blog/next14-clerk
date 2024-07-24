"use client";

import { Header } from "@/components/header";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();

  const welcomeMessage = user
    ? `Seja bem-vindo, ${user.fullName}!`
    : "Seja bem-vindo!";

  const createdAt = user
    ? user.createdAt?.toLocaleDateString()
    : "não foi criada";

  const updatedAt = user
    ? user.updatedAt?.toLocaleDateString()
    : "não foi atualizada";

  return (
    <div className="h-svh overflow-hidden">
      <Header />
      <div className="flex h-[20%] justify-center items-center gap-4 text-xl flex-col">
        <h1>{welcomeMessage}</h1>
        <p>
          Sua conta foi criada em {createdAt} e atualizada em {updatedAt}.
        </p>
      </div>
      <div className="flex h-[70%] flex-col items-center justify-center p-24">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  );
}
