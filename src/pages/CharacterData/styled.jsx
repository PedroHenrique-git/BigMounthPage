import styled from "styled-components";
import * as colors from "../../config/colors";

export const ContainerContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const CharacterCard = styled.div`
  background: ${colors.marromClaro};
  width: auto;
  height: auto;
  margin: 22px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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

      h3 {
        margin-bottom: 15px;
        white-space: nowrap;
        color: ${colors.verde};
        font-size: 20px;
      }

      p {
        padding: 2px 0;
        span {
          margin-right: 10px;
          color: ${colors.verde};
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
