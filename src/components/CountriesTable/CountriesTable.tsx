import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { NextPage } from "next";
import React from "react";
import styles from "./CountriesTable.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color='inherit' />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color='inherit' />
      </div>
    );
  }
};

interface CountriesTableProps {
  countries: Array<any>;
}

const CountriesTable: NextPage<CountriesTableProps> = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>Name</button>
        <button className={styles.heading_population}>Population</button>
      </div>
      {countries.map((country) => (
        <div key={country.name} className={styles.row}>
          <div className={styles.imageBox}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={country.flag} alt={country.name} />
          </div>

          <h3 className={styles.name}>{country.name}</h3>
          <p className={styles.population}>{country.population}</p>
          <p className={styles.area}>{country.area}</p>
          {/* <p className={styles.gini}>
            {!country.gini ? "0%" : `${country.gini}%`}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
