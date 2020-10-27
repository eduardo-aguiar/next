import React from "react";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Layout from "../components/Layout";

const BlogHome = (props) => (
  <>
    {console.log(props)}
    <h1>{RichText.asText(props.home.data.teste)}</h1>
  </>
);

BlogHome.getInitialProps = async (context) => {
  const home = await client.getSingle("teste");

  return { home };
};

export default BlogHome;
