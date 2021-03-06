import React from "react";
import { Layout } from "../../../components/layout";
import Axios from "axios";
import Head from "next/head";

const Id = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.title}</title>
          </Head>
          <Layout>
            <h1>{data.title}</h1>
            <div>
              <img src={data.pictures[0]} />
            </div>

            <div>{data.body}</div>
          </Layout>
        </>
      )}
    </>
  );
};

export const getStaticPaths = async (context) => {
  const { data } = await Axios.get(`${process.env.API_BLOG}/api/posts`);
  const posts = data.data;
  const paths = posts.map((post) => ({
    params: {
      id: post._id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const { data } = await Axios.get(`${process.env.API_BLOG}/api/post/${id}`);

  return {
    props: {
      data,
    },
  };
};

export default Id;
