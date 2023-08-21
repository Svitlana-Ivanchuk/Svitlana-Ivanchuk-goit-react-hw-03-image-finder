import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';
import { FormStyled, ButtonStyled, InputStyled } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleQueryChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Input query');
      return;
    }
    this.props.onFormSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <ButtonStyled type="submit">
          <ImSearch></ImSearch>
        </ButtonStyled>
        <InputStyled
          type="text"
          name="query"
          value={this.state.query}
          placeholder="Search images and photos"
          onChange={this.handleQueryChange}
        />
      </FormStyled>
    );
  }
}
