//import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    gallery: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '38162173-e7189c612242127d8d754fc70';
    const nextQuery = this.props.query;
    const prevQuery = prevProps.query;
    const nextPage = this.props.page;
    console.log(nextPage);
    if (prevQuery !== nextQuery || prevQuery === null) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => {
          if (!resp.ok) {
            return Promise.reject(new Error(`no match ${nextQuery}`));
          }
          return resp.json();
        })
        .then(gallery => this.setState({ gallery, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { gallery, status, error } = this.state;
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
          {gallery.hits.map(({ webformatURL, tags, id }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
            ></ImageGalleryItem>
          ))}
        </ImageGalleryStyled>
      );
    }
  }
}
