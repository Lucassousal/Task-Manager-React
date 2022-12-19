import React from "react";
import style from './Button.module.scss'

type Props = {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

class Button extends React.Component <Props> {  //Pode ser tipado assim: <{name:string}> ao inves de <Props>
  render() {
    const {type = "button", onClick} = this.props
    return(
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.name}  
      </button>
    )
  }
}



export default Button;


// Pode ser passado com um children (Props padrão como filho)
// No componente que ta passando a prop utiliza-se <Button> Adicionar </Button> (que assim Adicionar será filho de Button)
// no return dentro de button {this.props.children} e com isso não precisa tipar as class