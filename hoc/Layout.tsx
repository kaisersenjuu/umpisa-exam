import { Fragment } from "react";
import { MainContainer } from "./index.styled";
import { LayoutProps } from "@/types/GeneralTypes";
import HeaderMenu from "@/components/HeaderMenu";
import dynamic from "next/dynamic";

const NOSSRHeaderMenu: any = dynamic(() => import("../components/HeaderMenu"), {
  ssr: false,
});

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Fragment>
      <NOSSRHeaderMenu />
      <MainContainer>{children}</MainContainer>
    </Fragment>
  );
};

export default Layout;
