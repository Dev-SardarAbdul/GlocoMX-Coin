import styled from "styled-components";

export const StyledBenefits = styled.div`
  min-height: 60vh;
  background-color: rgb(1, 0, 36);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardGroup = styled.div`
  margin-top: 50px;

  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(18, 21, 48);
    margin-top: 20px;
    margin-bottom: 40px;

    @media (max-width: 991.98px) {
    }
  }

  .card-title {
    font-weight: 500;
    color: white;
    text-align: center;
    padding-top: 15px;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    padding-top: 15px;
    text-align: justify;
    text-align-last: center;
    color: white;
  }
`;
