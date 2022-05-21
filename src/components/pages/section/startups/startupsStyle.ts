import styled from "styled-components";
import rocket from "../../../assets/images/rocket.png";

export const StyledStartups = styled.div`
  min-height: 70vh;
  background-color: rgb(1, 0, 36);
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
    margin-bottom: 40px;
  }
`;

export const ImageContainer = styled.img.attrs({
  src: `${rocket}`,
})`
  height: 400px;
  object-fit: contain;

  @media (max-width: 991.98px) {
    margin-top: 50px;
    margin-bottom: 30px;
    height: 200px;
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
