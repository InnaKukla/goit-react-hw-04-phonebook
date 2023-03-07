import PropTypes from 'prop-types';
import { FormAddcontact } from './FormContacts.styled';

export const FormContacts = ({ onSubmitHandler }) => {
  return (
    <>
      <FormAddcontact onSubmit={onSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button>Add contact</button>
      </FormAddcontact>
    </>
  );
};

FormContacts.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
