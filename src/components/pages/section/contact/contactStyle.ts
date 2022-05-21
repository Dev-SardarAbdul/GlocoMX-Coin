import styled from "styled-components";

export const StyledContact = styled.div`
  min-height: 80vh;
  background-color: rgb(1, 0, 36);
`;
export const Wrapper = styled.div`
  margin-top: 50px;
`;
export const TextContainer = styled.div`
  @media (max-width: 575.98px) {
    padding: 10px;
  }
  h4 {
    color: white;
    margin-bottom: 20px;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }

  p {
    color: white;
    font-weight: 300;
    text-align: justify;
  }
`;
export const ContactContainer = styled.div`
  border: 3px solid white;
  margin-left: 100px;
  padding: 50px;
  border-radius: 10px;

  @media (max-width: 991.98px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

export const FormContainer = styled.div`
  .form-control {
    background-color: rgb(35, 41, 59);
    border: none;
    border-radius: 20px;
    color: rgb(112, 115, 123);

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }

  .form-control::placeholder {
    color: rgb(112, 115, 123);
    font-size: 14px;
  }

  textarea {
    height: 25vh !important;
    margin-bottom: 40px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
