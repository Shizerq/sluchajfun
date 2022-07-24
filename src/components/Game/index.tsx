import React from "react";

import { GuessType } from "../../types/guess";
import { Song } from "../../types/song";
import { playTimes } from "../../constants";
import "./index.css";
import { ethers } from "ethers";
import { Button, Guess, Player, Search, Result } from "../";
import * as Styled from "./index.styled";

//****
//import json
//import musicviddle from './utils/MusicViddle.json';
//fill in address
const mVAddress = "";
declare const window: any;
const { ethereum } = window;
interface Props {
  guesses: GuessType[];
  todaysSolution: Song;
  currentTry: number;
  didGuess: boolean;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  skip: () => void;
  guess: () => void;
}

export function Game({
  guesses,
  todaysSolution,
  currentTry,
  didGuess,
  setSelectedSong,
  skip,
  guess,
}: Props) {
  if (didGuess || currentTry === 6) {
    return (
      <Result
        didGuess={didGuess}
        currentTry={currentTry}
        todaysSolution={todaysSolution}
        guesses={guesses}
      />
    );
  }
  async function guesser(mVguess: any) {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        mVAddress,
        mVguess.abi,
        signer
      );

      const tx = await connectedContract.guess(mVguess);
      await tx.wait();
    }
  }
  return (
    <>
      {guesses.map((guess: GuessType, index) => (
        <Guess
          key={index}
          guess={guess}
          isCorrect={guess.isCorrect}
          active={index === currentTry}
        />
      ))}
      <Player id={todaysSolution.youtubeId} currentTry={currentTry} />
      <Search currentTry={currentTry} setSelectedSong={setSelectedSong} />
      <Styled.Buttons>
        <Button onClick={skip}>
          {currentTry === 5
            ? "Give up"
            : `Skip +${playTimes[currentTry] / 1000}s`}
        </Button>
        <Button variant="green" onClick={() => guesser(guess)}>
          Enter
        </Button>
      </Styled.Buttons>
    </>
  );
}
