import React from "react";
import {Input} from "@nextui-org/react";

type InputProps = {
  type: string;
  label: string;
  placeholder?: string;
};

export default function InputComponent({type, label, placeholder}: InputProps) {
  return (
    <Input type={type} label={label} placeholder={placeholder}  />
  );
}
