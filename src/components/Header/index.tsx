import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
}

export function Header({ openInfoPopUp }: Props) {
  return (
    <Styled.Container className="head">
      <Styled.Content>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />
        <Styled.Logo>Music Viddle</Styled.Logo>

        <a href="#"></a>
      </Styled.Content>
    </Styled.Container>
  );
}
