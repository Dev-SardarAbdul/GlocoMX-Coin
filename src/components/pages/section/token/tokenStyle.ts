import styled from "styled-components";
import secondchart from "../../../assets/images/secondchart.png";

export const StyledToken = styled.div`
  min-height: 50vh;
  background-color: rgb(1, 0, 36);
`;

export const TextContainer = styled.div`
  @media (max-width: 575.98px) {
    padding: 10px;
  }
  margin-top: 30px;
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
  src: `${secondchart}`,
})`
  height: 250px;
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 991.98px) {
    margin-bottom: 40px;
  }
`;
