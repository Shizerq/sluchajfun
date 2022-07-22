import React from "react";

import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = 0;//Math.floor(
  //   (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
  //     new Date().getTime()) /
  //     1000 /
  //     60 /
  //     60
  // );

  const textForTry = ["Wow!", "Good Job", "Nice!", "Super", "Smart"];

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const triesConjugation = currentTry === 1 ? "try" : "tries";

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
        {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
         You guessed it in: {currentTry} {triesConjugation}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Button onClick={copyResult} variant="green">
          Copy Results
        </Button>
        <Styled.TimeToNext>
          Be sure to come back in: {hoursToNextDay}{" "}
        </Styled.TimeToNext>
      </>
    );
  } else {
    return (
      <>
        <Styled.ResultTitle>Niestety, nie udało się...</Styled.ResultTitle>
        <Styled.SongTitle>
          Today's song: {todaysSolution.artist} -{" "}
          {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.TimeToNext>
          Play again in: {hoursToNextDay}{" "}!
        </Styled.TimeToNext>
      </>
    );
  }
}
