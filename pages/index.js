import React from "react";
import Layout from "../components/Layout";
import { client } from "../prismic-configuration";
import Prismic from "prismic-javascript";

export default class extends React.Component {
  static async getInitialProps(context) {
    const response = await client.query(
      Prismic.Predicates.at("document.type", "blog_post")
    );
    return {
      posts: response.results,
    };
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div>
          {this.props.posts.map((post) => (
            <>
              <h1>{post.data.title[0].text}</h1>
              <img src={post.data.post_image.url} alt=""></img>
              <p>{post.data.description[0].text}</p> ]
            </>
          ))}
        </div>
      </Layout>
    );
  }
}
