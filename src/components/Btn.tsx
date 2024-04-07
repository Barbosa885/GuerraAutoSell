import {Button} from "@nextui-org/button";

type BtnProps = {
  text : string
  className? : string
  children? : React.ReactNode
}

export default function Btn({text, className} : BtnProps) {
  return (
    <Button className={className}>{text}</Button>
  );
}
