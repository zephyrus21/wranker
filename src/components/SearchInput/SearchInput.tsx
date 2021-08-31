import React from "react";
import { NextPage } from "next";
import { SearchRounded } from "@material-ui/icons";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput: NextPage<SearchInputProps> = (rest) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input type='text' className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
