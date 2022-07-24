import React from "react";
import { IoHeart } from "react-icons/io5";
import "./index.css";
import * as Styled from "./index.styled";

export function Footer() {
  return (
    <footer className="foot">
      <Styled.Text>
        Made by
        <br />
        <Styled.Link> Kushal</Styled.Link>
      </Styled.Text>
    </footer>
  );
}
