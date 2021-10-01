import s from "./Contacts.module.scss"
import contactUs from "../../assets/images/contactUs.jpg"
import contactsImg from "../../assets/images/contacts.jpg"

const Contacts = () => {
  return <div>
    <div className={s.contactUsBlock}>
      <div className={s.infoBlock}>
        <h3>CONTACT US</h3>
        <h4>Ready. Set. Smile</h4>
        <p>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        <button>GET HELP NOW</button>
      </div>
      <img src={contactUs} alt="Contact us"/>
    </div>

    <div className={s.contacts}>

      <img src={contactsImg} alt="Contacts"/>

      <div className={s.contactsItems}>

        <div>
          <h4>SOME INFO</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
        </div>

        <div>
          <h4>ENFOLD HEALTH</h4>
          <p>Main Street 1, OlcottBuffalo, United States 3 </p>
          <p className={s.phoneNumber}>+555 283 784 33</p>
          <p className={s.email}>office@enfold-health.com</p>
        </div>

        <div className={s.timetable}>
          <h4>OFFICE HOURS</h4>
          <p>Mo-Fr: 8:00-19:00</p>
          <p>Sa: 8:00-14:00</p>
          <p>Su: closed</p>
        </div>

      </div>

    </div>

    <footer>
      <p>Copyright - ThriveTalk  2017</p>
    </footer>
  </div>
}
export default Contacts