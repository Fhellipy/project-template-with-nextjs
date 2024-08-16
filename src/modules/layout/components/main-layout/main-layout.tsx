"use client";

import { useVisualDebug } from "@shared/hooks/use-visual-debug";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  useVisualDebug();

  return <main className="p-4">{children}</main>;
}
