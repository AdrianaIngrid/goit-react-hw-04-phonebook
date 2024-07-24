import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import styles from './ContactForm/ContactForm.module.css';
import { useState, useEffect } from 'react';
function App() {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
    const [filter, setFilter] = useState('');
  // Aici incarcam contactele prima oara cand se da mount la aplicație
  useEffect(() => {
    console.log('Component did mount');
    const storedContacts = localStorage.getItem('contacts');
       if (storedContacts) {
      try {
        const parsedContacts = JSON.parse(storedContacts);
        console.log('Parsed contacts from localStorage:', parsedContacts);
        if (Array.isArray(parsedContacts)) {
          setContacts( parsedContacts);
        }
        
      } catch (error){
        console.error('Failed to parse contacts from localStorage:', error);
      }
     
    }
   },[]);

  // Aici salvam contactele cand se face update la ele
  useEffect(() => {
    console.log('Component did update, saving contacts to localStorage');
     localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);
 

  function handleNewContact(name, number) {
    const newContact = { id: nanoid(), name, number };
   const isDuplicate = contacts.some(contact =>
     contact.name.toLowerCase() === name.toLowerCase()
   );
    if (isDuplicate) {
      alert(`Contact with name ${name} is already in contacts.Please use a different name!`);
      return;
    }
       setContacts( prevContacts  => 
         [...prevContacts, newContact]
      );
  };
   const handleFilterChange = ev => {
    setFilter( ev.target.value );
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id),
    );
  };

  const filteredContacts = contacts.filter(contact => {
    if (!contact) {
      console.error("Invalid contact:", contact);
      return false;
    }
    if (!contact.name) {
      console.error("Contact with no name:", contact);
      return false;
    }
    if (typeof contact.name !== 'string'){
      console.log('Contact name is not a string.', contact)
      return false;
    }
      
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  
   
  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm handleNewContact={handleNewContact}></ContactForm>

      <h2 className={styles.titleContact}>Contacts</h2>
      <Filter
        handleFilterChange={handleFilterChange}
        filter={filter}
      ></Filter>
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
}

export default App;
