import React from "react";

export const Exemple = () => {
  const token = localStorage.getItem("jwt-token");
  return <div>{JSON.stringify(token)}</div>;
};

export const Exemple2 = () => {};
