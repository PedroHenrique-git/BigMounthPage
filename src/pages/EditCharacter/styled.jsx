import styled from "styled-components";
import * as colors from "../../config/colors";

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input[type="submit"] {
      padding: 10px;
      width: 100%;
      font-size: 20px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 4px;
      background: ${colors.marfimEscuro};
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      input,
      textarea {
        margin-top: 10px;
        height: 40px;
        width: 300px;
        border-radius: 4px;
        border: none;
        outline: none;
        border: 1px solid #cecece;
        font-size: 20px;
        padding: 5px;
      }

      textarea {
        height: 140px;
        resize: none;
      }
    }
  }
`;
