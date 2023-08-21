import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import toast from 'react-hot-toast';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { fetchApi } from '../Api';
import { BtnLoadMore } from '../ButtonLoadMore/ButtonLoadMore';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    isLoading: false,
  };

  totalImages = null;

  async componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.props.query;
    const prevQuery = prevProps.query;
    const nextPage = this.props.page;

    if (prevQuery !== nextQuery || prevProps.page !== nextPage) {
      this.setState({ status: 'pending' });

      const dataImages = await fetchApi(nextQuery, nextPage);

      this.totalImages = dataImages.total;
      const imagesHits = dataImages.hits;

      if (!imagesHits.length) {
        toast.error(
          'No results were found for your search, please try something else.'
        );
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesHits],
        status: 'resolved',
      }));
    }
  }

  render() {
    const { images, status, error, isLoading } = this.state;

    if (status === 'idle') {
      return <div></div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryStyled>
            {images.length > 0 &&
              images.map(({ webformatURL, tags, id, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  srcWeb={webformatURL}
                  srcLarge={largeImageURL}
                  alt={tags}
                ></ImageGalleryItem>
              ))}
          </ImageGalleryStyled>
          {isLoading && <Loader />}
          {images.length > 0 && images.length !== this.totalImages && (
            <BtnLoadMore onClick={this.props.onBtnLoadMoreClick}></BtnLoadMore>
          )}
        </>
      );
    }
  }
}
