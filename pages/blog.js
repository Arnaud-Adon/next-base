import React from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
// import { useRouter } from "next/router";
import Axios from "axios";
import Head from "next/head";

// Exemple de navigation avec des routes dynamiques et une refactorisation avec PostLink

// const PostLink = ({ titre }) => (
//   <li>
//     <Link href={`/blog/?titre=${titre}`}>{titre}</Link>
//   </li>
// );

// export const Blog = () => {
//   const router = useRouter();
//   console.log("router", router.query);
//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <ul>
//         <PostLink titre="react" />
//         <PostLink titre="angular" />
//         <PostLink titre="vue" />
//         <PostLink titre="svelte" />
//         <PostLink titre="apprendre Next js" />
//       </ul>
//     </Layout>
//   );
// };

const Blog = ({ posts }) => {
  const styles = {
    container: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #000",
    },
    img: {
      width: 500,
    },
  };
  return (
    <>
      <Head>
        <title>liste des posts du blog</title>
      </Head>
      <Layout>
        {posts.map((post) => (
          <div style={styles.container} key={post._id}>
            <Link href="/blog/post/[id]" as={`/blog/post/${post._id}`} passHref>
              <h1>{post.title}</h1>
            </Link>
            <div>
              <img style={styles.img} src={post.pictures[0]} />
            </div>

            <div>{post.body}</div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await Axios.get(`${process.env.API_BLOG}/api/posts`);
  const posts = data.data;

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
