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
        <h1>Cześć! 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
            Słuchaj.fun to codzienna gra muzyczna stworzona na podstawie{" "}
            <a href="https://heardle.app">Heardle</a>. Zawiera ona polskie
            utwory z różnych gatunków oraz okresów.
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>
            Codziennie generowany jest nowy utwór, zadaniem jest odgadnięcie go
            w jak najkrótszym czasie.
          </p>
        </Styled.Section>
        <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
          Zamknij
        </Button>
        <Styled.Contact>
          Kontakt -{" "}
          <a href="mailto:maciejsynowski@icloud.com">
            maciejsynowski@icloud.com
          </a>{" "}
        </Styled.Contact>
      </Styled.PopUp>
    </Styled.Container>
  );
}
