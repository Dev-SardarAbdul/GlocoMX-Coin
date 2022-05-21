import styled from "styled-components";
import profile from "../../../assets/images/profile.jpeg";

export const StyledAdvisors = styled.div`
  min-height: 80vh;
  background-color: rgb(1, 0, 36);
`;

export const AdvisorContainer = styled.div`
  margin-top: 70px;

  p {
    color: white;
    width: 80%;
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

export const ImageContainer = styled.img.attrs({
  src: `${profile}`,
})`
  border: 4px solid white;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 30px;
  margin-left: 40px;
  object-fit: cover;

  @media (max-width: 991.98px) {
    margin-left: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
