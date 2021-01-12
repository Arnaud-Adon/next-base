import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import Head from "next/head";

const Titre = () => {
  const router = useRouter();

  return (
    <>
      {router.query.titre && (
        <>
          <Head>
            <title>{router.query.titre}</title>
          </Head>
          <Layout>
            <h1>{router.query.titre && router.query.titre}</h1>
          </Layout>
        </>
      )}
    </>
  );
};

export default Titre;
