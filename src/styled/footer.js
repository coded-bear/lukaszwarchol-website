import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: 40px;
  text-align: center;

  nav {
    font-size: 18px;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding-left: 0;
      list-style: none;

      li {
        padding: 5px 10px;
        align-items: center;
        justify-content: center;
      }
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;