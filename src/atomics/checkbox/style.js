import styled from "styled-components";
import { device, font } from "../../theme/constant";

export const Label = styled.label`
  align-items: center;
  color: var(--cl-tertier);
  display: flex;
  font-size: ${font.s};
  height: 3rem;
  justify-content: flex-end;
  position: relative;
  user-select: none;
  width: 100%;

  @media ${device.laptop} {
  }
`;

export const Input = styled.input`
  display: none;

  &:not(:checked) ~ span:after {
    border-color: var(--cl-white);
  }
`;

export const Checkmark = styled.span`
  border: 1px solid var(--cl-tertier);
  height: 1rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;

  @media ${device.laptop} {
    height: 1rem;
    width: 1rem;
  }

  &:after {
    border: solid var(--cl-tertier);
    border-width: 0 2px 3px 0;
    content: "";
    left: 50%;
    position: absolute;
    height: 0.5rem;
    top: 45%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 5px;

    @media ${device.laptop} {
      height: 0.6rem;
      width: 0.2rem;
    }
  }
`;
