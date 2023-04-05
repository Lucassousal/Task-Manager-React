import style from './Clock.module.scss'

interface Props{
  time:number | undefined
}

export default function Clock({time = 0}:Props) {
  const min = Math.floor(time/60);
  const sec = time % 60;

  const [minDezena, minUnidade] = String(min).padStart(2,'0'); 
  const [secDezena, secUnidade] = String(sec).padStart(2,'0'); 
  
  return (
    <>
      <span className={style.relogioNumero}>{minDezena}</span>
      <span className={style.relogioNumero}>{minUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDezena}</span>
      <span className={style.relogioNumero}>{secUnidade}</span>
    </>
  );
}
