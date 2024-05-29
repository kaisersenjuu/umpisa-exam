import { Box, Button, ButtonBase, Container } from "@mui/material";
import {
  StyledDynamicSection,
  StyledDynamicSectionContent,
  StyledDynamicSectionImageContainer,
  StyledDynamicSectionTextArea,
} from "./index.styled";
import Image from "next/image";

const DynamicSection: React.FunctionComponent = (): React.ReactElement => {
  return (
    <StyledDynamicSection>
      <Container maxWidth="lg">
        <StyledDynamicSectionContent>
          <StyledDynamicSectionTextArea>
            <h1> Limited Collection </h1>
            <p>Get Free Shipping for all orders over $50.00</p>
            <Button
              variant="contained"
              className="shop-btn"
            >
              Shop Now
            </Button>
          </StyledDynamicSectionTextArea>
          <StyledDynamicSectionImageContainer>
            <Image
              src="/assets/images/bag.png"
              width={400}
              height={400}
              objectFit="cover"
              alt="bag-hero"
              className="bag-imgs"
              priority
            />
          </StyledDynamicSectionImageContainer>
        </StyledDynamicSectionContent>
      </Container>
    </StyledDynamicSection>
  );
};

export default DynamicSection;
