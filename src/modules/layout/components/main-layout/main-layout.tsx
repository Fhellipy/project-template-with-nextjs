"use client";

import { useVisualDebug } from "@shared/hooks/use-visual-debug";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  useVisualDebug();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 bg-gradient-to-tl from-blue-500 p-4">
      {children}
    </main>
  );
}
