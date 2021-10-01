
import s from "./ShouldKnow.module.scss"
import shouldKnow from "../../assets/images/shouldKnow.jpg"


const ShouldKnow = () => {
  return <div className={s.mainBLock}>
    <img src={shouldKnow} alt="You should know"/>
    <div className={s.infoBlock}>
      <h3>YOU SHOULD ALSO KNOW</h3>
      <p>
        MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span>ThriveTalk</span> can help you.
      </p>
      <button>GET HELP NOW</button>
    </div>
  </div>
}
 export default ShouldKnow