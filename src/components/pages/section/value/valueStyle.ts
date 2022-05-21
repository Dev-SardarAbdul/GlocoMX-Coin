import styled from "styled-components";
import chart from "../../../assets/images/chart.png";

export const StyledValue = styled.div`
  min-height: 50vh;
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

    @media (max-width: 991.98px) {
      margin-bottom: 40px;
    }
  }
`;
export const ImageContainer = styled.img.attrs({
  src: `${chart}`,
})`
  height: 250px;
  border: 2px solid white;
  border-radius: 10px;

  @media (max-width: 991.98px) {
    margin-bottom: 40px;
  }
`;
