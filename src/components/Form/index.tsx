import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss'

class Form extends React.Component <{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}> {
  state = {
    task:'',
    time:'00:00'
  };

  addTask(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault() //para parar o defaut do formulário de atualizar a página
    
    this.props.setTasks(oldTask => [...oldTask, {...this.state}])
  };


  //No onSubmit é adicionado o .bind(this)pois a função está fora de escopo, assim com o uso desse métdo pode ser utilizado o this.

  render() {
    return(
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}> 
        <div className={style.inputContainer}>
          <label htmlFor="task"> Adicione um novo estudo</label>
          <input 
            type="text" name="task" id="task" placeholder="O que você quer estudar?" required
            value={this.state.task}
            onChange={e => {this.setState({...this.state, task: e.target.value})}}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input 
            type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00"
            value={this.state.time} //Adicionado para mudar o valor do imput para poder pega-lo
            onChange={ e => {this.setState({...this.state, time: e.target.value})}} //é utilizado o this pois é classe; e.target.value é como pega os valores de inputs
          />
        </div>
        <Button
          name="Adicionar"
          type="submit"
        />
      </form>
    )
  }
}

export default Form;