import React from "react";
import propTypes from 'prop-types';
import styles from './ContactItem.module.css';
function ContactItem ({ id, name, number, deleteContact}) {
      return (
    <div>
    
        <li key= {id} className={styles.contactItem}>
              {name} : {number}
                  <button type="submit" onClick={()=> deleteContact(id)} className={styles.deleteBtn}>Delete</button>
        </li>
      
    </div>
  );
    }

ContactItem.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    number: propTypes.string,
    deleteContact: propTypes.func,
}
export default ContactItem;