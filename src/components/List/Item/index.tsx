
import style from '../List.module.scss';

// type Props = {
//   task: string;
//   time: string;
// }

export default function Item ( {task, time, key}: {task:string, time:string, key:number}) {

  return(
    <li key={key} className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}