import React, { useRef } from "react";
import "./lyrics.css";
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
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 border-0 h-25">
          {lyrics.length ? (
            <>
              <h4 className="text-decoration-underline text-success fw-bold">
                Lyrics
              </h4>
              <h1
                ref={lyricsRef}
                className="text-black fw-bold display-4 ly-hei"
              >
                {lyrics.map((lyric, index) => (
                  <span key={index} className="small my-5 h-75">
                    {lyric.text}
                  </span>
                ))}
              </h1>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default Lyrics;
