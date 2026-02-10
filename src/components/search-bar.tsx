"use client";

import * as React from "react";
import styles from "./search-bar.module.css";

import IconArrow from "../assets/icon-arrow.svg";

type SearchBarProps = {
  searchBarAction: (formData: FormData) => Promise<void>;
  badInput?: boolean;
};

function SearchBar({ searchBarAction, badInput = false }: SearchBarProps) {
  return (
    <div>
      <form className={styles.searchbar} action={searchBarAction}>
        {badInput && (
          <span className={styles.error}>
            {/* TODO: adicionar feedback ao usuário */}
            Invalid input, please try a valid IPv4 address or domain (e.g.
            www.example.com)
          </span>
        )}
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles.searchinput}
          name="search"
        />
        <button type="submit" className={styles.searchbtn}>
          <img src={IconArrow.src} />
        </button>
      </form>
    </div>
  );
}

export { SearchBar };
