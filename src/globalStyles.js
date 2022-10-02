import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --fonts-body: 'Open Sans', sans-serif;
  --fonts-heading: "Kaushan Script", cursive;

  --color-lightYellow: #F2F2EC;
  --color-white: #FFF;
  --color-black: #1E1E1E;
  --color-primary: rgba(212, 157, 86, 1);
  --color-primary80: rgba(212, 157, 86, 0.8);

  --color-gray90: rgba(0, 0, 0, 0.9);
  --color-gray80: rgba(0, 0, 0, 0.8);
  --color-gray70: rgba(0, 0, 0, 0.7);
  --color-gray60: rgba(0, 0, 0, 0.6);
  --color-gray50: rgba(0, 0, 0, 0.5);
  --color-gray40: rgba(0, 0, 0, 0.4);
  --color-gray30: rgba(0, 0, 0, 0.3);
  --color-gray20: rgba(0, 0, 0, 0.2);
  --color-white90: rgba(255, 255, 255, 0.9);
  --color-white80: rgba(255, 255, 255, 0.8);
  --color-white70: rgba(255, 255, 255, 0.7);
  --color-white60: rgba(255, 255, 255, 0.6);

}
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--fonts-body);
} 

html {
  overflow-x: hidden;
}
`;

export const SectionHeader = styled.div`
  display: flex;
  position: relative;
  margin-top: -80px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  background-image: url(${''});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: var(--fonts-heading);


  color: var(--color-lightYellow);
  font-size: 100px;
`;

export const SectionContainer = styled.div`
  width: 100%;
  background: var(--color-lightYellow);
  display: flex;
  justify-content: center;

`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;


export default GlobalStyle;
