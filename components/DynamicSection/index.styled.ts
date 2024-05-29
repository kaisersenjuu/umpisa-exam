import styled from "styled-components";

export const StyledDynamicSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  background-color: #f6f9fc;
`;

export const StyledDynamicSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDynamicSectionTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    width: 40%;
    font-size: 5rem;
  }

  p {
    font-size: 1.5rem;
    font-family: OpenSans-Light, sans-serif;
  }

  .MuiButton-contained {
    font-size: 2rem;
    font-family: OpenSans-Bold, sans-serif;
    width: 300px;
    background-color: black;
    padding: 1rem 0;
    text-transform: capitalize;

    &:hover {
      background-color: #525252;
    }
  }
`;

export const StyledDynamicSectionImageContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;

  .bag-img {
    height: auto;
    width: 100%;
  }
  /* @media (max-width: 800px) {
    .bag-img {
      height: 370px;
      width: auto;
      min-width: 0;
    }
  } */
`;
