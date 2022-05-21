import styled from "styled-components";
import { FaAngellist } from "react-icons/fa";
import { FaCuttlefish } from "react-icons/fa";
import { FaMix } from "react-icons/fa";

export const StyledFeature = styled.div`
  min-height: 40vh;
  background-color: rgb(1, 0, 49);
`;

export const FirstContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 20px;
  }
  h4 {
    color: rgb(255, 195, 0);
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
export const SecondContainer = styled.div`
  margin-top: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 20px;
  }
  h4 {
    color: rgb(255, 195, 0);
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
export const ThirdContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    margin-bottom: 50px;
  }

  p {
    color: white;
    font-size: 20px;
  }
  h4 {
    color: rgb(255, 195, 0);
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const BookIcon = styled(FaAngellist)`
  color: #9a9a9a;
  height: 50px;
  width: 40px;
`;
export const CoinIcon = styled(FaCuttlefish)`
  color: #9a9a9a;
  height: 50px;
  width: 40px;
`;
export const HandIcon = styled(FaMix)`
  color: #9a9a9a;
  height: 50px;
  width: 40px;
`;
