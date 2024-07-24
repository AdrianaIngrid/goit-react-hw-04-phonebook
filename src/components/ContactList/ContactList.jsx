import ContactItem from './ContactItem';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
function ContactList({ contacts, deleteContact }) {
  useEffect(() => { 
     localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
    return (
      <>
        <ul>
          {contacts.map(contact => (
            <ContactItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              key={nanoid()}
              deleteContact={deleteContact}
            ></ContactItem>
          ))}
        </ul>
      </>
    );
  }

ContactList.propTypes = {
    contacts: propTypes.array,
    deleteContact: propTypes.func,
}
export default ContactList;