import styled from "styled-components";

export const StyledFaq = styled.div`
  background-color: rgb(1, 0, 36);
  min-height: 50vh;
`;

export const FaqContainer = styled.div`
  margin-top: 050px;

  .accordion-body {
    background-color: rgb(1, 0, 36) !important;
    color: white;
    font-weight: 300;
  }

  .accordion-button {
    color: white !important;
    border: none !important;
    font-size: 18px;
    font-weight: 500;
    border-bottom: none !important;
  }

  .accordion-button.collapsed {
    background-color: rgb(1, 0, 36) !important;
  }

  .accordion-button:focus {
    box-shadow: none !important;
  }
  .accordion-button:not(.collapsed) {
    background-color: rgb(1, 0, 36) !important;
    background-image: url("https://b.stripecdn.com/docs/assets/6bf407479706b31fa82c548be63edc52.png");
  }
  .accordion-button::after {
    color: black !important;
    background-image: url("https://hackthestuff.com/assets/images/logo.png");
  }
`;
