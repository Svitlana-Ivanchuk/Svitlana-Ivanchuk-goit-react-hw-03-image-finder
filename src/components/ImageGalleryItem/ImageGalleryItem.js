import { Component } from 'react';
import { GalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import { ImageModal } from 'components/Modal/Modal';
import { Loader } from '../Loader/Loader';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(135, 198, 237, 0.75)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    isLoading: false,
  };

  openModal = () => this.setState({ isModalOpen: true, isLoading: true });
  closeModal = () => this.setState({ isModalOpen: false, isLoading: false });

  render() {
    const { srcWeb, srcLarge, alt } = this.props;
    return (
      <GalleryItemStyled>
        {this.state.isLoading && <Loader />}
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
