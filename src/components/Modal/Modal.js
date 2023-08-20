import Modal from 'react-modal';
import { ImageLargeStyled } from './Modal.styled';

export const ImageModal = ({
  isModalOpen,
  onClose,
  customStyles,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ImageLargeStyled src={src} alt={alt} onClick={onClose} />
    </Modal>
  );
};
