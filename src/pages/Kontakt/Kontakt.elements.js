import styled from "styled-components";
import {
  SectionContainer,
  SectionWrapper
} from "../../globalStyles";

export const Container = styled(SectionContainer)`
  background-color: var(--color-black);
  margin: 3rem 0;
`;
export const Wrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
