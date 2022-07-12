import { ButtonHTMLAttributes } from "react";
import { FiX } from "react-icons/fi";
import { Button } from "./styles";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClose: () => void;
  size?:number;
}

export function CloseButton({
  handleClose,
  size = 16,
  ...rest
}: CloseButtonProps) {
  return (
    <Button type="button" onClick={handleClose} {...rest}>
      <FiX size={size}/>
    </Button>
  );
}
