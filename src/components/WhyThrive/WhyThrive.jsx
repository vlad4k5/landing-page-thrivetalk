import s from "./WhyThrive.module.scss"
import whyThrive from "../../assets/images/whyThrive.jpg"

const WhyTrive = () => {
  return <div className={s.mainBlock}>

    <div className={s.infoBlock}>
      <h2>Why Thrive?</h2>
      <p>
        <span>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?</span>   Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!
      </p>
    </div>

    <img src={whyThrive} alt="Why Thrive?" />

  </div>
}
export default WhyTrive