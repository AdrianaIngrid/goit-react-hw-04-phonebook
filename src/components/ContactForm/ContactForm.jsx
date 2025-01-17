import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import React, { useState } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsTelephonePlusFill } from 'react-icons/bs';
function ContactForm({handleNewContact} ) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name")
      setName(value);

      
    if (name === "number") 
      setNumber(value);
      
  };
 function handleContact (ev) {
   ev.preventDefault();
   if (name.trim() && number.trim()) {
        handleNewContact(name, number);
        setName('');
        setNumber('');
   }

  };
 

    return (
      <form onSubmit={handleContact} className={styles.form}>
        <label className={styles.label}>
          {' '}
          Name{' '}
          <span className={styles.spanForm}>
            <IoMdPersonAdd />
          </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            // pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          {' '}
          Number{' '}
          <span className={styles.spanForm}>
            <BsTelephonePlusFill />
          </span>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit" className={styles.addbtn}>
          Add Contacts
        </button>
      </form>
    );
  }
ContactForm.propTypes = {
  handleNewContact: PropTypes.func,
};
export default ContactForm;