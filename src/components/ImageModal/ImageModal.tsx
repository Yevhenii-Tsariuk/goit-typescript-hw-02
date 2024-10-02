import Modal from "react-modal";
import css from "./ImageModal.module.css";
import Photo from "../App/App.types";

interface ImageModalProps {
  image: Photo | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt="Modal content"
          className={css.largeImage}
        />
      )}
    </Modal>
  );
};
export default ImageModal;
