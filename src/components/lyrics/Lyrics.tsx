import React, { useRef } from "react";

interface Lyric {
  text: string;
}

interface LyricsProps {
  lyrics: Lyric[];
}

const Lyrics: React.FC<LyricsProps> = ({ lyrics }) => {
  const lyricsRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <h4 className="text-decoration-underline text-success fw-bold">Lyric</h4>
      <h1 ref={lyricsRef} className="text-white fw-bolder">
        {lyrics.map((lyric, index) => (
          <p key={index}>{lyric.text}</p>
        ))}
      </h1>
    </>
  );
};

export default Lyrics;
