import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({onClick}){
     return(
          <button type='button' onClick={onClick} className={css.btn}> Load more </button>
     )
}