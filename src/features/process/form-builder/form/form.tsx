import { Button } from "@/shared/ui/button";
import type { FormConfig } from "./types";
import { Field } from "../field/field";
import { useForm } from "react-hook-form";
import { Form } from "@/shared/ui/form";

export function FormBuilder({ config }: { config: FormConfig }) {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="space-y-4">
        <div>
          {config.fields.map((field, index) => (
            <Field key={index} field={field} />
          ))}
        </div>
        <div>
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </div>
      </form>
    </Form>
  );
}
