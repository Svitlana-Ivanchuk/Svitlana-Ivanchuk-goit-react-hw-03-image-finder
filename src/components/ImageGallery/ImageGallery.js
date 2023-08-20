//import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '38162173-e7189c612242127d8d754fc70';
    const nextQuery = this.props.query;
    const prevQuery = prevProps.query;
    const nextPage = this.props.page;
    console.log(nextPage);
    if (
      prevQuery !== nextQuery ||
      prevQuery === null ||
      prevProps.page !== nextPage
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }

          return Promise.reject(new Error(`no match ${nextQuery}`));
        })
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { images, status, error } = this.state;
    if (status === 'idle') {
      return <div></div>;
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      return (
        <ImageGalleryStyled>
          {images.hits.map(({ webformatURL, tags, id, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              srcWeb={webformatURL}
              srcLarge={largeImageURL}
              alt={tags}
            ></ImageGalleryItem>
          ))}
        </ImageGalleryStyled>
      );
    }
  }
}
