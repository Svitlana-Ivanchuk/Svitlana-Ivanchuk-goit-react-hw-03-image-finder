//import { Formik, Field, Form } from 'formik';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onFormSubmit }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        onFormSubmit(evt.target.elements.query.value);
        evt.target.reset();
      }}
    >
      <button type="submit">
        <ImSearch></ImSearch>
      </button>
      <input
        id="text"
        name="query"
        type="text"
        placeholder="Search images and photos"
      />
    </form>
  );
};
