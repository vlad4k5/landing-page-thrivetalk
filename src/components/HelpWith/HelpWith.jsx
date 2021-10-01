
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
      <li style={{ backgroundImage: `url(${listBackground})` }}><div><span>Nutrition</span></div></li>
      <li className={s.li4}><div><span>Gymnastics</span></div></li>
      <li className={s.li5}><div><span>Crossfit</span></div></li>
      <li className={s.li6}><div><span>Aerobics</span></div></li>
    </ul>

    <ul className={s.bottomList}>

      <li>
        <h3>Nutritional Plans</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>

      <li>
        <h3>Weight Loss</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>

      <li>
        <h3>Mental Peace</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>

      <li>
        <h3>Home Training</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>

      <li>
        <h3>Work/Life Balance</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>

      <li>
        <h3>Cardio</h3>
        <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
      </li>
      
    </ul>
  </div>
}
export default HelpWith