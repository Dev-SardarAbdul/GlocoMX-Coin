import styled from "styled-components";
import bg from "../../../assets/images/bg.jpg";

export const StyledHeader = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #030c15;
  opacity: 1;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  margin-top: 100px;
`;
export const TextContainer = styled.div`
  @media (max-width: 575.98px) {
    padding: 10px;
  }
  h1 {
    color: rgb(250, 191, 1);
    font-size: 70px;
    font-weight: 400;

    @media (max-width: 991.98px) {
      text-align: center;
    }

    @media (max-width: 575.98px) {
      font-size: 50px;
    }

    @media (max-width: 412px) {
      font-size: 40px;
    }
  }

  h4 {
    color: rgb(232, 237, 241);
    font-weight: 500;
    font-size: 30px;
    padding-top: 5px;
    width: 80%;

    @media (max-width: 991.98px) {
      width: 100%;
      text-align: center;
    }
    @media (max-width: 767.98px) {
      font-size: 18px;
    }

    @media (max-width: 412px) {
      font-size: 17px;
    }
  }
  p {
    padding-top: 20px;
    color: rgb(191, 191, 195);
    text-align: justify;
    font-weight: 500;
    width: 80%;
    margin-bottom: 50px;

    @media (max-width: 991.98px) {
      width: 100%;
    }
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 991.98px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  p {
    color: rgb(232, 237, 241);
    font-size: 20px;
    text-align: center;
  }

  .progress-bar {
    color: rgb(250, 191, 1);
    border-radius: 5px;
  }

  .progress {
    margin-top: 20px;
    width: 53%;
    border-radius: 5px;
  }
`;

export const SpanContainer = styled.div`
  .row {
    .col {
      background-color: black;
      color: white;
      height: 50px;
      margin-left: 10px;
      border-radius: 5px;
      text-align: center;
    }
  }
`;

export const BtnWrapper = styled.div`
  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
