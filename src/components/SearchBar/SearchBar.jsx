import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  
    const [value, setValue] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      if (value.trim() === "") {
        toast.error("The input field cannot be empty");
        return;
      }

      onSubmit(value);
      setValue("");
    }

    function inputChange(event) {
      setValue(event.target.value);
    }
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={inputChange}
          />
          <IconContext.Provider value={{ color: "blue" }}>
            <button className={css.button} type="submit">
              <FaMagnifyingGlass />
            </button>
          </IconContext.Provider>
        </form>
        <Toaster
          position="top-right"
        />
      </header>
    );
}
