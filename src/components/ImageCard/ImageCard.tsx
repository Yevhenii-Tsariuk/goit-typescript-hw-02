import React from "react";
import ImageItem from "./ImageCard.types"
import css from "./ImageCard.module.css";



interface ImageCardProps {
  item: ImageItem;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={item.urls.small || item.urls.regular}
        alt={item.alt_description || "Image"}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageCard;
