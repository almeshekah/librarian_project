
import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  
  background-image: url("https://i.stack.imgur.com/jGlzr.png");
}
`;



export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ProductWrapper = styled.div`
  margin: 20px;
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;
  ;`

  export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;
export const NavItem = styled(NavLink)`
  color: black;
  padding: 0.25em 1em;

  
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 80%;

  img {
    width: 20%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
  h1 {
    font-size: 40px;
    vertical-align: middle;
    color: black;
  }
`;


export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export {
 
  GlobalStyle,
  
};