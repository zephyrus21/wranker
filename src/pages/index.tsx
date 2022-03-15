import type { NextPage } from "next";
import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

interface HomeProps {
  countries: Array<any>;
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  return (
    <Layout title={"Wranker"}>
      <div className={styles.counts}>Found {countries.length}</div>
      <SearchInput
        placeholder='Search Country'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          setKeyword(e.target.value.toLowerCase());
        }}
      />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

export default Home;
