import styled from "styled-components";
import * as colors from "../../config/colors";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.preto};
  padding: 20px;

  img {
    width: 400px;
    height: 100px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: links;
  align-self: flex-end;
  justify-self: flex-end;

  @media (max-width: 640px) {
    margin-top: 20px;
    justify-self: center;
    align-self: center;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: "links" "form";

  a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    padding-right: 10px;
    padding-bottom: 20px;
  }
`;
