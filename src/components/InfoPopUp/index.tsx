import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome! 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
           Ready to play VEVO guesser?? You have 5 guesses to guess the correct song!
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          
        </Styled.Section>
        <Button variant="background100" style={{ marginTop: 20 }} onClick={onClose}>
          Enter
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
