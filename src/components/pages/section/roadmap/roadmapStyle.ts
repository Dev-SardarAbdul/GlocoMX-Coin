import styled from "styled-components";

export const StyledRoadmap = styled.div`
  min-height: 100vh;
  background-color: rgb(1, 0, 36);

  .vertical-timeline-element-date {
    color: yellow;

    @media (max-width: 1170px) {
      color: black;
    }
  }

  .vertical-timeline-element-icon {
    height: 30px;
    width: 30px;
    margin-left: -15px;

    @media (max-width: 1169px) {
      margin-left: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 50px;
`;
