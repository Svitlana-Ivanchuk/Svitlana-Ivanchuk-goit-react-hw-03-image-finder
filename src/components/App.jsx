import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './Layout.js';
import { BtnLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleFormSubmit = newQuery => {
    console.log(newQuery);
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = newImages => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      images: [...prevState.images, newImages],
    }));
  };

  render() {
    return (
      <Layout>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
        ></ImageGallery>
        <Loader />
        <BtnLoadMore onClick={this.handleLoadMore}></BtnLoadMore>

        <Toaster autoClose={3000} />
        <GlobalStyle />
      </Layout>
    );
  }
}
