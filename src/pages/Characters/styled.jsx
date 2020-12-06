import styled from "styled-components";
import * as colors from "../../config/colors";

export const CharactersContainer = styled.main`
  //padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharacterCard = styled.div`
  background: ${colors.marromClaro};
  width: 450px;
  height: auto;
  margin: 22px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.3s;
  }

  @media (max-width: 640px) {
    width: 430px;
    &:hover {
      transform: none;
      transition: none;
    }
  }

  figure {
    display: flex;

    figcaption {
      padding: 0 20px;

      a {
        text-decoration: none;
        h3 {
          margin-bottom: 15px;
          white-space: nowrap;
          color: ${colors.verde};
          font-size: 20px;

          &:hover {
            color: #fff;
            transition: all 10ms;
          }
        }
      }

      p {
        padding: 2px 0;
        span {
          margin-right: 10px;
        }
        font-size: 20px;
        margin-right: 14px;
        color: ${colors.marfim};
      }

      button,
      a {
        margin-top: 20px;
        border: none;
        color: ${colors.marfim};
        outline: none;
        cursor: pointer;
        background: transparent;

        &:nth-of-type(1) {
          margin-right: 20px;
        }
      }
    }

    img {
      border-radius: 5px;
      width: 200px;
      height: 200px;
    }
  }
`;

export const ButtonsWrap = styled.div`
  display: ${(props) => (props.nameSearched ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;

  button {
    padding: 20px;
    outline: none;
    border: none;
    outline: none;
    background: transparent;
    color: ${colors.marromClaro};
    cursor: pointer;
  }
`;

export const SearchBar = styled.section`
  background: ${colors.marfimEscuro};
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

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
        left: 56%;
        top: 17.5%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 640px) {
          left: 73%;
          top: 31.5%;
        }
      }
    }
  }
`;
