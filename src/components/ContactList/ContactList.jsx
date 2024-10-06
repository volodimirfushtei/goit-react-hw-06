import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice"; // Імпортуємо екшен для видалення контакту
import { selectContacts } from "../../redux/Contacts/selectors.js"; // Імпортуємо селектор для отримання контактів

const ContactList = () => {
  const contacts = useSelector(selectContacts) || []; // Отримуємо список контактів з Redux Store
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Викликаємо екшен для видалення контакту
  };

  return (
    <ul className={s.contacts}>
      {contacts.map((contact) => (
        <Contact
          value={contact.id}
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => handleDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
