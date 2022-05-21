import styled from "styled-components";
import mainlogo from "../assets/images/mainlogo.png";

export const StyledFooter = styled.div`
  background-color: rgb(35, 41, 59);
  min-height: 60vh;
`;

export const Wrapper = styled.div`
  height: 50vh;
  padding-top: 50px;

  @media (max-width: 991.98px) {
    padding-top: 0px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 575.98px) {
    padding: 10px;
  }

  p {
    text-align: justify;
    color: white;
    font-weight: 300;
    font-size: 13px;
  }
`;
export const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: white;
    margin-top: 17px;
    font-weight: 300;
  }

  h4 {
    color: white;
    font-size: 20px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    display: none;
  }

  p {
    text-align: justify;
    color: white;
    font-weight: 300;
    font-size: 13px;
  }
  h4 {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.img.attrs({
  src: `${mainlogo}`,
})`
  height: 70px;
  object-fit: contain;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (max-width: 991.98px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;
