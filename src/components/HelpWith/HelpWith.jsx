
import s from "./HelpWith.module.scss"
import listBackground from "../../assets/images/list-background.jpg"

const HelpWith = () => {
  return <div className={s.mainBlock}>

    <h2>WE CAN HELP YOU WITH</h2>
            
    <ul className={s.topList}>
      <li className={s.li1}><div><span>Weight Lifting</span></div></li>
      <li className={s.li2}><div><span>Running</span></div></li>
      <li className={s.li3}><div><span>Pumping Iron</span></div></li>
      <li className={s.li4}><div><span>Spinning</span></div></li>
    </ul>

    <ul className={s.middleList}>
      <li className={s.li1}><div><span>Physical Health</span></div></li>
      <li className={s.li2}><div><span>Mental Health</span></div></li>
      <li className={s.li3} style={{ backgroundImage: `url(${listBackground})` }}><div><span>Nutrition</span></div></li>
      <li className={s.li4}><div><span>Gymnastics</span></div></li>
      <li className={s.li5}><div><span>Crossfit</span></div></li>
      <li className={s.li6}><div><span>Aerobics</span></div></li>
    </ul>
  </div>
}
export default HelpWith