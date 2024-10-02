import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImageClick }) {
  return (
    <div className={css.card} >
      
        <img className={css.image} src={item.urls.small} alt={item.alt_description} onClick={onImageClick}/>
      
    </div>
  );
}
