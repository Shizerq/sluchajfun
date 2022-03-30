import { Song } from "./song";

export type GuessType = {
  song: Song | undefined;
  skipped: boolean;
  isCorrect: boolean | undefined;
};
