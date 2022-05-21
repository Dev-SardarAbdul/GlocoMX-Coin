import styled from "styled-components";
import shoo from "../../assets/images/shoo.png";

export const StyledShop = styled.div`
  min-height: 140vh;
  background-color: rgb(1, 0, 36);

  .container:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageContainer = styled.img.attrs({
  src: `${shoo}`,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  @media (max-width: 991.98px) {
    margin-top: 50px;
    margin-bottom: 30px;
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(18, 21, 48);
    margin-bottom: 20px;
    padding: 20px;

    @media (max-width: 991.98px) {
    }
  }

  .card-title {
    font-weight: 500;
    color: white;
    text-align: center;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    margin-top: 15px;
    text-align: justify;
    text-align-last: center;
    color: white;
  }

  .card-img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-top: 10px;
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
