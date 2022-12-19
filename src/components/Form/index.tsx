import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss'
import {v4 as uuidv4} from 'uuid';



interface Props{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTasks}:Props){

  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function addTask(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault() //para parar o defaut do formulário de atualizar a página
    
    setTasks(oldTask => [...oldTask, {task, time, selected: false, completed:false, id:uuidv4()}])

    setTask('');
    setTime('00:00')
    
  };

  return(
    <form className={style.novaTarefa} onSubmit={addTask}> 
      <div className={style.inputContainer}>
        <label htmlFor="task"> Adicione um novo estudo</label>
        <input 
          type="text" name="task" id="task" placeholder="O que você quer estudar?" required
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input 
          type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00"
          value={time} //Adicionado para mudar o valor do imput para poder pega-lo
          onChange={ e => setTime(e.target.value)} //é utilizado o this pois é classe; e.target.value é como pega os valores de inputs
        />
      </div>
      <Button
        name="Adicionar"
        type="submit"
      />
    </form>
  )
}

export default Form;