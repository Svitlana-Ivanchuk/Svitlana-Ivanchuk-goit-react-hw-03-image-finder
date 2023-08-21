import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './Layout.js';
import { Loader } from './Loader/Loader';
import { fetchApi } from './Api';
import { BtnLoadMore } from './ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: '',
    isLoading: false,
  };

  totalImages = null;

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      this.getImages();
    }
  }

  getImages = async () => {
    const nextQuery = this.state.query;
    const nextPage = this.state.page;
    const dataImages = await fetchApi(nextQuery, nextPage);
    this.totalImages = dataImages.total;
    const imagesHits = dataImages.hits;

    if (!imagesHits.length) {
      toast.error(
        'No results were found for your search, please try something else.'
      );
    }

    try {
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesHits],
        isLoading: false,
      }));
    } catch {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
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
    const { images, error, isLoading } = this.state;

    return (
      <Layout>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>

        <ImageGallery images={images}></ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && images.length !== this.totalImages && (
          <BtnLoadMore onClick={this.handleLoadMore}></BtnLoadMore>
        )}
        <Toaster autoClose={3000} />
        <GlobalStyle />
        {error &&
          toast.error(
            'Something happened. Please refresh the page and try again.'
          )}
      </Layout>
    );
  }
}
