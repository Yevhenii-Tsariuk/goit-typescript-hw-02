import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from "react-icons";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  
  
  const [value, setValue] = useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (value.trim() === "") {
        toast.error("The input field cannot be empty");
        return;
      }

      onSubmit(value);
      setValue("");
    }

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
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

export default SearchBar;
