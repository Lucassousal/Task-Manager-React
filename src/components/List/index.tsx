import React  from 'react';
import Item from './Item';
import style from './List.module.scss'
import { ITask } from '../../types/task';

interface Props {
  tasks: ITask[],
  selectTask : (selectedTask: ITask) => void
}


function List ({tasks, selectTask}: Props) {

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>

        {tasks.map( item => (
          <Item 
          selectTask={selectTask}
          key={item.id}
          {...item}
          // task={item.task} pode ser feito assim
          // time={item.time} pode ser feito assim
          />
        ))}

      </ul>
    </aside>
  )
}

export default List;