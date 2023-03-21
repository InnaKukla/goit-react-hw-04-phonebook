import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts';
import { FilterContacts } from './FilterContacts';
import { ContactsList } from './ContactsList';

export function App() {
  // const contactsArray = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? ''
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };

    const checkAddContact = contacts
      .map(cont => cont.name)
      .includes(e.target.name.value);
    if (checkAddContact) {
      alert(`${e.target.name.value} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const filterContacts = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const onDeleteHandler = id => {
    const deleteContacts = contacts.filter(contact => contact.id !== id);
    setContacts(deleteContacts);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) =>
        name.toLowerCase().includes(normalizedFilter));
  };
  
  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        color: '#010101',
        marginLeft: 20,
      }}
    >
      <h1>Phonebook</h1>
      <FormContacts onSubmitHandler={submitHandler} />
      <h2>Contacts</h2>
      <FilterContacts filterContacts={filterContacts} />
      <ContactsList
        onDeleteHandler={onDeleteHandler}
        contacts={visibleContacts()}
      />
    </div>
  );
}
