import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        background: ${colors.marfim};
    }
`;
