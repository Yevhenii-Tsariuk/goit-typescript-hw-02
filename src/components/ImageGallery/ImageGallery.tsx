import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import Photo from "../App/App.types";



interface ImageGalleryProps {
  items: Photo[];
  listRef: React.RefObject<HTMLUListElement>;
  onImageClick: (image: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, listRef, onImageClick }) => {
  return (
    <ul ref={listRef} className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} onImageClick={() => onImageClick(item)}/>
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;