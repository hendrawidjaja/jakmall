import styled from "styled-components";
import { device, font } from "../../theme/constant";

export const Container = styled.div`

&:before {
  content: "";
  display: flex;
  height: 100%:
  background-color: var(--cl-primary);
}

  @media ${device.laptop} {
    margin-top: 5rem;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${(props) =>
    props.total
      ? `
    margin-top: 1.5rem;
    margin-bottom: 2rem;

    p {
      color: var(--cl-primary);
      font-weight: 700;
      letter-spacing: 0.6px;

      @media ${device.laptop} {
        letter-spacing: 1px;
      }
    }

    @media ${device.laptop} {
      font-size: ${font.l};
      margin-top: 1rem;
      margin-bottom: 1.8rem;
    }
  `
      : `
       font-size: ${font.s};
    `}

  @media ${device.laptop} {
  }
`;

export const Title = styled.p`
  color: var(--cl-grey);
`;

export const Text = styled.p`
  font-weight: bold;
`;
