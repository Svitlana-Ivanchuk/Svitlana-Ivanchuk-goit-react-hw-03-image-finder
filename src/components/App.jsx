import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
    }
  }

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
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery>
        <div>
          <button type="button" onClick={this.handleLoadMore}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}
