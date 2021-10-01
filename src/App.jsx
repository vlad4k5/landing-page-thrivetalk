import Header from "./components/Header/Header";
import s from "./App.module.scss"
import WhyTrive from "./components/WhyThrive/WhyThrive";
import AboutUs from "./components/AboutUs/AboutUs";
import HelpWith from "./components/HelpWith/HelpWith";
import ShouldKnow from "./components/ShouldKnow/ShouldKnow";
import Contacts from "./components/Contacts/Contacts";


function App() {
  return <div className={s.app}>
    <Header />
    <WhyTrive />
    <AboutUs />
    <HelpWith />
    <ShouldKnow />
    <Contacts />
  </div>
}

export default App;