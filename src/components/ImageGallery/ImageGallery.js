import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
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
    </>
  );
};
