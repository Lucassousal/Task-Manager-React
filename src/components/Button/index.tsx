import React from "react";
import style from './Button.module.scss'

type Props = {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  // children: React.ReactNode
}

function Button({name,type,onClick}:Props) {
  return(
    <button 
      onClick={onClick} 
      type={type} 
      className={style.botao}
    >
      {name}  
    </button>
  )
}

export default Button;

