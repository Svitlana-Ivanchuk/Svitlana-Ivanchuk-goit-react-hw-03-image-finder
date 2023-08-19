import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };
  handleFormSubmit = newQuery => {
    console.log(newQuery);
    this.setState({
      query: newQuery,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery>
        <div>
          <button type="button">Load More</button>
        </div>
      </div>
    );
  }
}
