import React, { useState, useEffect } from "react";
import { Layout } from "../components/layout";
import Axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
// const NameLink = ({ nom }) => (
//   <li>
//     <Link href={`/profile?nom=${nom}`}>{nom}</Link>
//   </li>
// );

// const Profile = () => {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>Profile</h1>
//       <ul>
//         <NameLink nom="Pascal" />
//         <NameLink nom="Pedro" />
//         <NameLink nom="Wonder" />
//       </ul>
//       <h1>{router.query.nom && router.query.nom}</h1>
//     </Layout>
//   );
// };

const Profile = () => {
  const fetcher = (url) => Axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_JSON_PLACEHOLDER,
    fetcher
  );

  const styles = {
    container: {
      padding: 10,
      margin: 10,
    },
  };

  if (!data) return <h1>Chargement...</h1>;
  if (error) return <h1>Une erreur est survenue</h1>;

  //TODO: possibilité d'utiliser un spinner

  return (
    <>
      <Head>
        <title>Liste des profiles</title>
      </Head>
      <Layout>
        <h1>Rendu d'une page côté client</h1>
        {data &&
          data.map((user) => (
            <div style={styles.container} key={user.id}>
              <h1>{user.name}</h1>
              <div>Email : {user.email}</div>
              <div>Téléphone : {user.phone}</div>
            </div>
          ))}
      </Layout>
    </>
  );
};

export default Profile;
