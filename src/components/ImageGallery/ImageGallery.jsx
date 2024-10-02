import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, listRef, onImageClick }) {
  return (
    <ul ref={listRef} className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <ImageCard item={item} onImageClick={() => onImageClick(item.urls.regular)}/>
          </li>
        );
      })}
    </ul>
  );
}
