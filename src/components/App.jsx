import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import s from "./App.module.css";
import { FaPhoneVolume } from "react-icons/fa6";

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Phonebook
        <FaPhoneVolume className={s.icon} />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
