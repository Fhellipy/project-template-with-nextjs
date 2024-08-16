import { zodResolver } from "@hookform/resolvers/zod";
import { exampleSchema, type ExampleFormValues } from "@modules/home/schemas";
import { useForm } from "react-hook-form";

export function ExampleForm() {
  const form = useForm<ExampleFormValues>({
    resolver: zodResolver(exampleSchema),
  });

  const onSubmit = form.handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...form.register("name")} />
      <input {...form.register("description")} />
      <button type="submit">Submit</button>
    </form>
  );
}
