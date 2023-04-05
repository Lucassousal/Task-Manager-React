import React  from 'react';
import Item from './Item';
import style from './List.module.scss'
import { ITask } from '../../types/task';

interface Props {
  tasks: ITask[],
  selectTask : (selectedTask: ITask) => void,
  excludeTask: (selectedTask:ITask) => void
}


function List ({tasks, selectTask, excludeTask}: Props) {

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>

        {tasks.map( item => (
          <Item 
          selectTask={selectTask}
          excludeTask={excludeTask}
          key={item.id}
          {...item}
          />
        ))}

      </ul>
    </aside>
  )
}

export default List;