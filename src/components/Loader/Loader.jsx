import css from "./Loader.module.css";

import { RotatingTriangles } from "react-loader-spinner";



export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        wrapperClass=""
        wrapperStyle={{}}
        ariaLabel="rotating-triangle-loading"
        colors={["#1B5299", "#EF8354", "#DB5461"]}
      />
    </div>
  );
}
