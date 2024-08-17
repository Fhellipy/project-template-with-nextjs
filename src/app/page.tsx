import { ExampleForm } from "@modules/home/components";
import { MainLayout } from "@modules/layout/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MainLayout>
        <ExampleForm />
      </MainLayout>
    </Suspense>
  );
}
