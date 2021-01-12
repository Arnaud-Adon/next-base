import React from "react";
import { Layout } from "../components/layout";
import Axios from "axios";
import Head from "next/head";

const Departements = ({ data }) => {
  const styles = {
    departement: { padding: 10, margin: 10, borderBottom: "1px solid #000" },
  };
  return (
    <>
      <Head>
        <title>Liste des départements</title>
      </Head>
      <Layout>
        {data.map((d) => (
          <div style={styles.departement} key={d.code}>
            <h1>nom :{d.nom}</h1>
            <p>code: {d.code}</p>
            <p>code région: {d.codeRegion}</p>
          </div>
        ))}
      </Layout>
    </>
  );
};

// Departements.getInitialProps = async (context) => {
export const getServerSideProps = async (context) => {
  const url = `https://geo.api.gouv.fr/departements`;
  const { data } = await Axios.get(url);

  //   return {
  //     data,
  //   };

  return {
    props: { data },
  };
};

export default Departements;
