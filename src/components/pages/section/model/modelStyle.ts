import styled from "styled-components";

export const StyledModel = styled.div`
  min-height: 60vh;
  background-color: rgb(1, 0, 36);
`;

export const ProjectContainer = styled.div`
  p {
    color: white;
    margin-top: 40px;
    text-align: center;
  }
  .progress-bar {
    color: rgb(250, 191, 1);
    border-radius: 5px;
  }

  .progress {
    margin-top: 20px;
    width: 90%;
    border-radius: 5px;
    outline: 1px solid white;
    background-color: transparent;

    @media (max-width: 767.98px) {
      width: 100%;
    }
  }
`;
