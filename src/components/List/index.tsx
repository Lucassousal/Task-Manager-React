import React  from 'react';
import Item from './Item';
import style from './List.module.scss'
import { ITask } from '../../types/task';

function List ({tasks}: {tasks: ITask[]}) {

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>

        {tasks.map((item,key) => (
          <Item 
          key={key}
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