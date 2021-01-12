import React from "react";
import Axios from "axios";
import { Layout } from "../../components/layout";
import Head from "next/head";

const CodeRegion = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>Région {data.nom}</title>
          </Head>
          <Layout>
            <h1>Region : {data.nom}</h1>
            <p>code : {data.code}</p>
          </Layout>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const code = params.code;

  const { data } = await Axios.get(`${process.env.API_GEO}/regions/${code}`);

  return {
    props: {
      data,
    },
  };
};

export default CodeRegion;
