"use client";

import { useVisualDebug } from "@hooks/use-visual-debug";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  useVisualDebug();

  return <>{children}</>;
}
