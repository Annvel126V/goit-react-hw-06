// import Contact from "../Contact/Contact";
// import { useSelector } from "react-redux";
// import s from "./ContactList.module.css";
// import { getContacts } from "../../redux/contactsSlice";
// import { getStatusFilter } from "../../redux/filtersSlice";

// const ContactList = () => {
//   const contacts = useSelector(getContacts);

//   const filter = useSelector(getStatusFilter);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ul className={s.list}>
//       {filteredContacts.map((contact) => (
//         <li className={s.item} key={contact.id}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
