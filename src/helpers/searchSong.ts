import { songs } from "../constants";
import { Song } from "../types/song";

export function searchSong(searchTerm: string): Song[] {
  searchTerm = searchTerm.toLowerCase();

  return songs
    .filter((song: Song) => {
      const songName = song.name.toLowerCase();
      const songArtist = song.artist.toLowerCase();

      if (songArtist.includes(searchTerm) || songName.includes(searchTerm)) {
        return song;
      }
    })
    .sort((a, b) =>
      a.artist.toLowerCase().localeCompare(b.artist.toLocaleLowerCase())
    )
    .slice(0, 5);
}
