import React  from 'react';
import Item from './Item';
import style from './List.module.scss'

function List () {

  const tasks = [
    {
      task: 'React',
      time: '02:00:00',
    },
    {
      task: 'JavaScript',
      time: '01:00:00',
    },
    {
      task: 'TypeScript',
      time: '01:00:00',
    },
  ]

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