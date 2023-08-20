import { Component } from 'react';
import { GalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import { ImageModal } from 'components/Modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { srcWeb, srcLarge, alt } = this.props;
    return (
      <GalleryItemStyled>
        <ImageStyled src={srcWeb} alt={alt} onClick={this.openModal} />
        <ImageModal
          isModalOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          customStyles={customStyles}
          src={srcLarge}
          alt={alt}
        />
      </GalleryItemStyled>
    );
  }
}
