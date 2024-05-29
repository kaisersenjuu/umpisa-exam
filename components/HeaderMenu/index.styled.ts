import styled from "styled-components";

export const HeaderMenuContainer = styled.nav<{ $scrolled?: boolean }>`
  height: 80px;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props =>
    props.$scrolled ? "white" : "rgba(255, 255, 255, 0)"};
`;

export const HeaderMenuFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeaderMenuIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  gap: 1.5rem;

  .MuiButtonBase-root {
    border-radius: 50px;
  }

  svg {
    font-size: 3rem;
    border-radius: 50px;
    color: #7d879c;

    &:hover {
      background-color: rgba(201, 201, 201, 0.6);
    }
  }
`;
