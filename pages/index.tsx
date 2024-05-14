import Layout from "@/hoc/Layout";
import { NextPage } from "next";
import { Fragment } from "react";

const Homepage: NextPage = (): React.ReactElement => {
  return (
    <Fragment>
      <Layout>
        <h1>hello world</h1>
      </Layout>
    </Fragment>
  );
};

export default Homepage;
