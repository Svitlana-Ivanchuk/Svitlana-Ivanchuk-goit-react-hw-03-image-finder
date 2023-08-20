import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './Layout.js';
import { BtnLoadMore } from './ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  //componentDidUpdate(prevProps, prevState) {
  //  if (
  //    prevState.query !== this.state.query ||
  //    prevState.page !== this.state.page
  //  ) {
  //  }
  //}

  handleFormSubmit = newQuery => {
    console.log(newQuery);
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <Layout>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
        ></ImageGallery>

        <BtnLoadMore
          onClick={this.handleLoadMore}
          page={this.state.page}
        ></BtnLoadMore>

        <Toaster autoClose={3000} />
        <GlobalStyle />
      </Layout>
    );
  }
}
