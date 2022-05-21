import styled from "styled-components";
import transparentlogo1 from "../../../assets/images/transparentlogo1.png";

export const StyledWork = styled.div`
  min-height: 100vh;
  background-color: rgb(1, 0, 36);
`;

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const FirstContainer = styled.div`
  margin-bottom: 40px;

  @media (max-width: 575.98px) {
    padding: 10px;
  }
  h2 {
    color: white;
    margin-bottom: 30px;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }
  p {
    color: white;
    text-align: justify;
  }
`;

export const ImageContainer = styled.img.attrs({
  src: `${transparentlogo1}`,
})`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 250px;
  width: 280px;
`;
