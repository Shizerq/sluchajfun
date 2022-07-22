import React from "react";
import { IoHeart } from "react-icons/io5";
import "./index.css";
import * as Styled from "./index.styled";



export function Footer() {
  const logo = require('./vevo.png');
  return (
    <footer>
      <Styled.Text>
        Made by *twitter or other link*
        <Styled.Link >
         Kushal in collaboration with: 
          <img className="vlogo" src={logo}/>
        </Styled.Link>
      </Styled.Text>
    </footer>
  );
}
