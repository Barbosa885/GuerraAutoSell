import {Button} from "@nextui-org/button";

type BtnProps = {
  text : string;
  className? : string;
  children? : React.ReactNode;
  onClick? : () => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

export default function Btn({text, className, onClick, color} : BtnProps) {
  return (
    <Button 
      onClick={onClick} 
      className={className}
      color={color}
    >{text}</Button>
  );
}
