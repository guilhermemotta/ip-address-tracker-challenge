"use client";

import * as React from "react";

import styles from "./search-bar.module.css";
import IconArrow from "../assets/icon-arrow.svg";
import handleSearchSubmit from "../app/actions";

const initialState = { message: "", data: undefined };

function SearchBar() {
  const [state, formAction, pending] = React.useActionState(
    handleSearchSubmit,
    initialState,
  );

  return (
    <div>
      <form className={styles.searchbar} action={formAction}>
        {state.data?.errors && (
          <span className={styles.error}>
            {/* TODO: adicionar feedback ao usuário */}
            Invalid input, please try a valid IPv4 address (e.g. 8.8.8.8) or
            domain (e.g. www.example.com)
          </span>
        )}
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.searchinput}
          name="search"
        />
        <button type="submit" className={styles.searchbtn} disabled={pending}>
          <img src={IconArrow.src} />
        </button>
      </form>
    </div>
  );
}

export { SearchBar };
