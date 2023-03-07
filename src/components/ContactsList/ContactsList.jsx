import { PhoneContacts } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteHandler }) => {
  return (
    <PhoneContacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              onClick={() => {
                onDeleteHandler(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </PhoneContacts>
  );
};
ContactsList.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};
