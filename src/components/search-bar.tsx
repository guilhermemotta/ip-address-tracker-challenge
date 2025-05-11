"use-client";
// import styled from "styled-components";
import styles from "./search-bar.module.css";

import IconArrow from "../assets/icon-arrow.svg";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <SearchInput placeholder="Search for any IP address or domain" />
      <SearchBtn>
        <img src={IconArrow.src} />
      </SearchBtn>
    </div>
  );
}

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = (props: SearchInputProps) => (
  <input className={styles.searchinput} {...props} />
);

const SearchBtn = ({ children }: { children: React.ReactNode }) => (
  <button className={styles.searchbtn}>{children}</button>
);

// const SearchInput = styled.input`
//   /* padding: 1rem; */
//   border: 1px solid transparent;
//   border-top-left-radius: 16px;
//   border-bottom-left-radius: 16px;
//   border-top-right-radius: 0px;
//   border-bottom-right-radius: 0px;

//   background-color: white;
//   color: hsl(0, 0%, 17%);

//   height: 60px;
//   width: 100%;
//   padding-left: 1rem;
// `;

// const SearchBtn = styled.button`
//   border: 1px solid transparent;
//   border-top-left-radius: 0px;
//   border-bottom-left-radius: 0px;
//   border-top-right-radius: 16px;
//   border-bottom-right-radius: 16px;
//   background-color: black;
//   color: white;

//   height: 60px;
//   width: 60px;

//   &:hover {
//     background-color: var(--very-dark-gray);
//     cursor: pointer;
//   }

//   & > img {
//     height: 14px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

export default SearchBar;
