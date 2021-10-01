import s from "./Header.module.scss"
import headerImg from "../../assets/images/headerImg.png"

const Header = () => {
  return <div className={s.headerBlock}>
    <header>
      <span className={s.logo}>Thrivetalk</span>
      <nav>
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Blog</button>
      </nav>

      <button className={s.contactUsButton}>CONTACT US</button>
    </header>

    <div className={s.headerInfo}>
      <span className={s.logo}>Thrivetalk</span>
      <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
      <p>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>

      <div className={s.headerInfoButtons}>
        <button className={s.whoAmIButton}>WHO AM I</button>
        <button className={s.whatDoIDoButton}>WHAT DO I DO</button>
      </div>
    </div>  

    <div className={s.rightHorisontal}></div>
    <div className={s.asideBlock}></div>
    <img src={headerImg} className={s.headerImg} alt="Header"/>
  </div>
}
 export default Header