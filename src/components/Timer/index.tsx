import { useEffect } from "react"
import { useState } from "react"
import timeToSecond from "../../common/utils/time"
import { ITask } from "../../types/task"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

interface Props {
  selected: ITask | undefined
}

export default function Timer({selected}:Props){

  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if(selected?.time){
      setTime(timeToSecond(selected.time))
    }
  },[selected])

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button name='Começar'/>
    </div>
  )
}