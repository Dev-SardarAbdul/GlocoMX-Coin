import styled from "styled-components";

export const StyledTopbar = styled.nav`
  background-color: rgb(1, 0, 36);
  .container {
    .navbar-nav {
      font-size: 20px;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .navbar .navbar-collapse {
      text-align: center;
    }
    .nav-link {
      color: #ffffff;
      padding: 25px;

      &:hover {
        color: white;
      }
      &:focus {
        color: white;
      }
      &:active {
        color: white;
      }

      a {
        text-decoration: none;
        color: #ffc300;
        &:hover {
          color: white;
        }
      }
    }

    .img-fluid {
      height: 60px;
    }
  }
`;
