import { Fragment } from "react";
import { MainContainer } from "./index.styled";
import { LayoutProps } from "@/types/GeneralTypes";

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Fragment>
      <nav></nav>
      <MainContainer>{children}</MainContainer>
    </Fragment>
  );
};

export default Layout;
