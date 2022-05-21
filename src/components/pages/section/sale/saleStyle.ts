import styled from "styled-components";

export const StyledSale = styled.div`
  min-height: 80vh;
  background-color: rgb(1, 0, 36);
`;
export const CardsGroup = styled.div`
  margin-top: 50px;
  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    border-radius: 10px;
    margin-bottom: 30px;

    @media (max-width: 767.98px) {
      width: 30rem !important;
    }

    @media (max-width: 575.98px) {
      width: 21rem !important;
    }
  }

  .card-title {
    font-weight: 500;
    color: rgb(77, 115, 145);
    text-align: center;
    padding-top: 15px;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    padding-top: 15px;
    text-align: justify;
    text-align-last: center;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
