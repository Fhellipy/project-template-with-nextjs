"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type ExampleFormValues, exampleSchema } from "@modules/home/schemas";
import { useForm } from "react-hook-form";

export function ExampleForm() {
  const form = useForm<ExampleFormValues>({
    resolver: zodResolver(exampleSchema),
  });
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit(data => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4 rounded-md bg-background p-5 shadow-custom md:w-[50dvw] lg:w-[40dvw]"
    >
      <h1 className="mb-4 text-center text-2xl font-bold">
        Formulário de exemplo
      </h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-bold uppercase">
          Nome
        </label>
        <input
          {...form.register("name")}
          placeholder="Nome"
          className="rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-sm font-bold text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-bold uppercase">
          Descrição
        </label>
        <textarea
          {...form.register("description")}
          placeholder="Descrição"
          className="h-40 resize-none rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <span className="text-sm font-bold text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}
