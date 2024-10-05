import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { getContacts } from "../../redux/contactsSlice";
import { gchangeFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(gchangeFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
