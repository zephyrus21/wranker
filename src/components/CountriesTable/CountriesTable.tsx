import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { NextPage } from "next";
import React, { useState } from "react";
import styles from "./CountriesTable.module.css";

interface CountriesTableProps {
  countries: Array<any>;
}

type OrderFormat = "asc" | "desc" | null;
type ValueFormat = "name" | "population" | "area" | "gini";

const orderBy = (countries: Array<any>, value: any, direction: OrderFormat) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    // return [...countries].sort((a, b) => console.log(a[value] > b[value] ? 1:-1));
  }

  return countries;
};

const SortArrow = ({ direction }: any) => {
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

const CountriesTable: NextPage<CountriesTableProps> = ({ countries }) => {
  const [direction, setDirection] = useState<OrderFormat>();
  const [value, setValue] = useState<ValueFormat>();

  const orderedCountries = orderBy(countries, value, direction!);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value: ValueFormat) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}>
          Name
          {value === "name" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}>
          Population
          {value === "population" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection("area")}>
          Area (km<sup style={{ fontSize: "0.5rem" }}>2</sup>)
          {value === "area" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("gini")}>
          Gini
          {value === "gini" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedCountries.map((country) => (
        <div key={country.name} className={styles.row}>
          <div className={styles.flag}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={country.flag} alt={country.name} />
          </div>
          <div className={styles.name}>{country.name}</div>

          <div className={styles.population}>{country.population}</div>

          <div className={styles.area}>{country.area || 0}</div>

          <div className={styles.gini}>{country.gini || 0} %</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
