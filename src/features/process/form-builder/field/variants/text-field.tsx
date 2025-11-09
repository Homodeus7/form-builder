import { Input } from "@/shared/ui/input";
import type { TextFieldConfig } from "../types";
import { BaseDescription, BaseLabel, BaseMessage } from "../field-base";
import { useId } from "react";

export function TextField({ config }: { config: TextFieldConfig }) {
  const id = useId();
  return (
    <>
      <BaseLabel id={id} error={""}>
        {config.label}
      </BaseLabel>
      <Input id={id} name={config.name} />
      <BaseDescription id={id} />
      <BaseMessage id={id} error="" />
    </>
  );
}
