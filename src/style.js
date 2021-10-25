import styled from "styled-components";
import { Link } from "react-router-dom";
import { device, font } from "./theme/constant";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: var(--screen-max-width);
  padding: 4rem 0 7rem;

  @media ${device.desktop} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Nav = styled.nav`
  align-items: center;
  background-color: var(--cl-secondary);
  border-radius: 5rem;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  transform: translateY(50%);
  z-index: 1;

  @media ${device.laptop} {
    height: 3rem;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 50%;
  }
`;

export const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: calc(calc(100% / 3));
  text-decoration: none;

  svg {
    fill: var(--cl-primary);
    margin-left: 0.3rem;
    min-width: 1.25rem;

    @media ${device.laptop} {
      margin-left: 1rem;
    }
  }
`;

export const P = styled.p`
  color: var(--cl-primary);
  font-size: ${font.xs};
  font-weight: normal;

  @media ${device.laptop} {
    font-size: ${font.s};
  }

  ${(props) => (props.active ? `font-weight: 700` : "")}
`;

export const Number = styled.span`
  align-items: center;
  background-color: var(--cl-primary);
  border-radius: 50%;
  color: var(--cl-white);
  display: flex;
  font-size: ${font.s};
  height: 1.8rem;
  justify-content: center;
  margin-right: 0.5rem;
  position: relative;
  min-width: 1.8rem;

  @media ${device.laptop} {
    font-size: ${font.l};
    height: 2.25rem;
    margin-right: 1rem;
    width: 2.25rem;
  }

  &:before {
    content: "";
    min-height: 1.8rem;
    position: absolute;
    min-width: 1.8rem;

    @media ${device.laptop} {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
