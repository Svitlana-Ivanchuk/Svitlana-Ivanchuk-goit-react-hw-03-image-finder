import { GalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <GalleryItemStyled>
      <ImageStyled src={src} alt={alt} />
    </GalleryItemStyled>
  );
};
