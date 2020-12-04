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

  form {
    grid-area: form;

    label {
      text-decoration: none;
      font-size: 20px;
      color: #fff;

      input {
        height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
        padding: 5px;
        font-size: 18px;
        width: 300px;
      }

      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        position: absolute;
        right: 32px;
        top: 84px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 640px) {
          right: 90px;
          top: 205px;
        }
      }
    }
  }
`;
