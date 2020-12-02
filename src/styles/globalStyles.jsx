import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
    }
`;

export const Container = styled.section`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
