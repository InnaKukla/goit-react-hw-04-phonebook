import PropTypes from 'prop-types';
import { FilterInput } from './FilterContacts.styled';
export const FilterContacts = ({ filterContacts }) => {
  return (
    <>
      <FilterInput>
        Find contacts by name
        <input onChange={filterContacts}></input>
      </FilterInput>
    </>
  );
};

FilterContacts.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
