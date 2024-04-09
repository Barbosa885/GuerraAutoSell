import {Button} from "@nextui-org/button";

type BtnProps = {
  text : string
  className? : string
  children? : React.ReactNode
  onClick? : () => void
}

export default function Btn({text, className, onClick} : BtnProps) {
  return (
    <Button onClick={onClick} className={className}>{text}</Button>
  );
}
