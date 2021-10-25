import styled, { css } from "styled-components";
import { device, font } from "../../theme/constant";

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 0 0;
  position: relative;
  min-height: 5rem;

  @media ${device.laptop} {
    height: 5rem;
  }

  ${(props) =>
    props.decorationLine &&
    css`
      &:after {
        background-color: rgba(16, 16, 16, 0.1);
        top: 65%;
        content: "";
        display: flex;
        height: 0.4rem;
        position: absolute;
        right: 0;
        left: 0;
        width: 85%;

        @media ${device.laptop} {
          top: 52.5%;
        }
      }
    `}
`;

export const H2 = styled.h2`
  color: var(--cl-primary);
  font-size: ${font.xxl};
  position: relative;

  @media ${device.laptop} {
    font-size: ${font.xxl};
  }
`;

export const H3 = styled.h3`
  color: var(--cl-primary);
  font-size: ${font.l};

  @media ${device.laptop} {
    font-size: ${font.l};
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) =>
      props.isValidPhoneNumber ? `var(--cl-tertier)` : `rgba(16, 16, 16, 0.2)`};
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem;
  position: relative;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }

  &.valid {
    border: 1px solid var(--cl-tertier);
  }

  &.error {
    border: 1px solid var(--cl-primary);
  }

  svg {
    height: 1rem;
    position: absolute;
    right: 7.5%;
    top: 55%;
    transform: translate(50%, -50%);
    width: 1rem;

    @media ${device.laptop} {
    }
  }
`;

export const Label = styled.label`
  font-size: ${font.xxs};
  color: ${(props) =>
    props.isValidPhoneNumber ? `var(--cl-tertier)` : `rgba(16, 16, 16, 0.2)`};

  @media ${device.laptop} {
    font-size: ${font.xs};
  }
`;

export const Input = styled.input`
  cursor: pointer;
  font-size: ${font.xs};
  padding: 0.5rem 0 0.2rem;
  width: 100%;

  @media ${device.laptop} {
    font-size: ${font.s};
  }
`;

export const Textarea = styled.textarea`
  border-radius: 0;
  border: none;
  height: 5rem;
  margin-top: 0.25rem;
  outline: none;
  padding: 0;

  @media ${device.laptop} {
    font-size: ${font.s};
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;

  @media ${device.laptop} {
    height: 10rem;
    width: 30%;

    ${(props) =>
      props.divider &&
      `
    &:before {
      background-color: var(--cl-primary);
      bottom: 0;
      content: "";
      display: flex;
      height: 25rem;
      left: -1.5rem;
      position: absolute;
      top: 0;
      width: 1px;
    }
  `}
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    height: 10rem;
  }
`;

export const InputSubmit = styled.input.attrs((props) => ({
  type: "submit",
}))`
  color: var(--cl-white);
  background-color: var(--cl-primary);
  font-size: ${font.m};
  padding: 1rem 1rem;
  width: 100%;

  @media ${device.laptop} {
    font-size: ${font.l};
    margin-top: 3rem;
  }
`;
