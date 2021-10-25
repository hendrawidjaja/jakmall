import styled from "styled-components";
import { device, font } from "../../theme/constant";

export const Container = styled.div`
  background-color: var(--cl-white);
  padding: 3rem 2.5rem;
  position: relative;

  @media ${device.laptop} {
    min-height: 40vh;
  }
`;

export const Navigation = styled.div`
  align-items: center;
  display: flex;
`;

export const BackToCart = styled.p`
  align-items: center;
  color: var(--cl-black);
  display: flex;
  font-size: ${font.xs};
  margin-left: 0.6rem;

  svg {
    margin-right: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: ${font.s};
    margin-left: 0.6rem;
  }
`;
