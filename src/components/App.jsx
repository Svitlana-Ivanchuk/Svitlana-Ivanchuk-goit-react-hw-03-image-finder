import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './Layout.js';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  handleFormSubmit = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, query, page } = this.state;

    return (
      <Layout>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>

        <ImageGallery
          query={query}
          page={page}
          images={images}
          onBtnLoadMoreClick={this.handleLoadMore}
        ></ImageGallery>

        <Toaster autoClose={3000} />
        <GlobalStyle />
      </Layout>
    );
  }
}
