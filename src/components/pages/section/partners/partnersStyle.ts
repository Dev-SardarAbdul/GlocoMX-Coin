import styled from "styled-components";
import lg from "../../../assets/images/lg.png";

export const StyledPartners = styled.div`
  min-height: 60vh;
  background-color: rgb(1, 0, 49);
`;
export const ImageContainer = styled.img.attrs({
  src: `${lg}`,
})`
  height: 170px;
  object-fit: contain;

  @media (max-width: 991.98px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: 50px;

  h4 {
    color: white;
    margin-top: 20px;

    @media (max-width: 991.98px) {
      margin-bottom: 30px;
    }
  }
`;
