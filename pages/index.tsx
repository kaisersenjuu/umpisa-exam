import DynamicSection from "@/components/DynamicSection";
import Layout from "@/hoc/Layout";
import { Container } from "@mui/material";
import { NextPage } from "next";
import { Fragment } from "react";

const Homepage: NextPage = (): React.ReactElement => {
  return (
    <Fragment>
      <Layout>
        <DynamicSection />
      </Layout>
    </Fragment>
  );
};

export default Homepage;
