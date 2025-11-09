type FieldBase = {
  id: string;
  name: string;
  label: string;
  required: boolean;
};

export type TextFieldConfig = FieldBase & {
  type: "text";
  placeholder?: string;
  maxLength?: number;
};

export type NumberFieldConfig = FieldBase & {
  type: "number";
  min?: number;
  max?: number;
};

export type SelectFieldConfig = FieldBase & {
  type: "select";
  options: string[];
};

export type CheckboxFieldConfig = FieldBase & {
  type: "checkbox";
};

export type ComboboxFieldConfig = FieldBase & {
  type: "combobox";
  options: string[];
};

export type ArrayFieldConfig = FieldBase & {
  type: "array";
  itemType: FieldConfig;
};

export type FieldConfig =
  | TextFieldConfig
  | NumberFieldConfig
  | SelectFieldConfig
  | CheckboxFieldConfig
  | ComboboxFieldConfig
  | ArrayFieldConfig;
