import type { NextPage } from "next";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

interface HomeProps {
  countries: any;
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  return (
    <Layout title={"Wranker"}>
      <div className={styles.counts}>Found {countries.length}</div>
      <SearchInput placeholder='Search Country' />
      <CountriesTable countries={countries} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

export default Home;
