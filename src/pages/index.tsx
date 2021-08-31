import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

interface HomeProps {
  countries: any;
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  return <Layout title={"Wranker"}>Hey</Layout>;
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
