import Layout from "@/hoc/Layout";
import { Container } from "@mui/material";
import { NextPage } from "next";
import { Fragment } from "react";

const Homepage: NextPage = (): React.ReactElement => {
  return (
    <Fragment>
      <Layout>
        <section style={{ height: "100vh" }}>
          <Container maxWidth="xl">
            <h1> test </h1>
          </Container>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Homepage;
