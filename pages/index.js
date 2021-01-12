import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import Axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";

const Home = ({ data }) => {
  const styles = {
    data: {
      padding: 10,
      margin: 10,
      borderBottom: "1px solid #000",
    },
    img: {
      width: 100,
    },
  };

  return (
    <>
      <Head>
        <title>Liste des régions</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          {data.map((r) => (
            <div style={styles.data} key={r.code}>
              <Link href="/region/[code]" as={`/region/${r.code}`} passHref>
                <h1>{r.nom}</h1>
              </Link>
              <p className="p">{r.code}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await Axios.get(`${process.env.API_GEO}/regions`);

  return {
    props: {
      data,
    },
  };
};

export default Home;
