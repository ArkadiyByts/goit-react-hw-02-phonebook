import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return(
    <div className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <span className={css.bullet}></span>
        <p>{name}:</p>
        <p className={css.number}>{number}</p>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
        </button>
      </li>
    ))}
  </div>
  )
};


export default ContactList;