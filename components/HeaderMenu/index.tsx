import { useState, useEffect } from "react";
import Image from "next/image";
import {
  HeaderMenuContainer,
  HeaderMenuFlexContainer,
  HeaderMenuIconsContainer,
} from "./index.styled";
import { Container, ButtonBase } from "@mui/material";
import Link from "next/link";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const HeaderMenu: React.FunctionComponent = (): React.ReactElement => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;

      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <HeaderMenuContainer $scrolled={scrolled}>
      <Container maxWidth="lg">
        <HeaderMenuFlexContainer>
          <Link href={"/"}>
            <Image
              src="/assets/images/logoipsum.svg"
              alt="umpisa-exam-concepcion"
              height={70}
              width={300}
              className="header-logo"
            />
          </Link>
          <HeaderMenuIconsContainer>
            <ButtonBase centerRipple={true}>
              <PersonOutlinedIcon />
            </ButtonBase>
            <ButtonBase centerRipple={true}>
              <ShoppingBagOutlinedIcon />
            </ButtonBase>
          </HeaderMenuIconsContainer>
        </HeaderMenuFlexContainer>
      </Container>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
