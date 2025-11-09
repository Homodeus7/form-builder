import type { FieldConfig } from "./types";
import { TextField } from "./variants/text-field";

export function Field({ field }: { field: FieldConfig }) {
  switch (field.type) {
    case "text":
      return <TextField config={field} />;
  }
}
