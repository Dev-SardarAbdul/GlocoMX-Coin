import styled from "styled-components";
import tesla from "../../../assets/images/tesla.png";

export const StyledPortfolio = styled.div`
  min-height: 60vh;
  background-color: rgb(1, 0, 49);
`;

export const TextContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 575.98px) {
    padding: 10px;
  }
  p {
    color: white;
    text-align: justify;
    font-weight: 300;
  }
`;
export const CompanyName = styled.div`
  @media (max-width: 991.98px) {
    margin-bottom: 40px;
  }
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    text-align: justify;
    font-weight: 300;
    width: 50%;
  }
`;

export const Tesla = styled.img.attrs({
  src: `${tesla}`,
})`
  height: 80px;
  margin-right: 30px;
  object-fit: cover;
`;
