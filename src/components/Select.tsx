import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { FaCarAlt } from "react-icons/fa";

type SelectInputProps = {
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

export default function SelectInput({options, label, placeholder, value, onChange, disabled}: SelectInputProps) {

  if (!Array.isArray(options)) {
    console.error("options não é um array:", options);
    return null;
  }

  return (
    <Select
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      startContent={<FaCarAlt />}
      className="max-w-lg w-full"
    >
      {options.map((option: any, index: number) => (
        <SelectItem key={option.value || index} value={option.value} textValue={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
