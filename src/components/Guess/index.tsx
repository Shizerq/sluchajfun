import React from "react";

import { GuessType } from "../../types/guess";

import * as Styled from "./index.styled";

interface Props {
  guess: GuessType;
  isCorrect: boolean | undefined;
  active: boolean;
}

export function Guess({ guess, isCorrect, active }: Props) {
  const { song, skipped } = guess;
  const [text, setText] = React.useState<string>("");

  React.useEffect(() => {
    if (song) {
      setText(`${song.artist} - ${song.name}`);
    } else if (skipped) {
      setText("Omitted");
    } else {
      setText("");
    }
  }, [guess]);

  return (
    <Styled.Container active={active} isCorrect={isCorrect}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
}
