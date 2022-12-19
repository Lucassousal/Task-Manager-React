import { useEffect } from "react"
import { useState } from "react"
import { start } from "repl"
import timeToSecond from "../../common/utils/time"
import { ITask } from "../../types/task"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

interface Props {
  selected: ITask | undefined
  endTask: () => void
}

export default function Timer({selected, endTask}:Props){

  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if(selected?.time){
      setTime(timeToSecond(selected.time))
    }
  },[selected])


  function start(time: number = 0){
    setTimeout(() =>{
      if(time > 0){
        setTime(time - 1);
        return start(time - 1);
      }
      endTask()
    },1000)
  }

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button name='Começar' onClick={() => start(time)}/>
    </div>
  )
}