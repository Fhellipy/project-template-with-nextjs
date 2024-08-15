import { MainLayout } from "@modules/layout/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MainLayout>
        <div>
          <p>Component Model</p>
        </div>
      </MainLayout>
    </Suspense>
  );
}
