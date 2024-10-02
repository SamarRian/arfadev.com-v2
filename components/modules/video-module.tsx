import Script from "next/script";
import React from "react";

function VideoModule() {
  return (
    <>
      <Script src="https://player.vimeo.com/api/player.js" />
      <div className="p-3 relative w-full h-[400px]">
        <iframe
          src="https://player.vimeo.com/video/1007717548?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="absolute top-0 left-0 w-full h-full"
          title="Sandstorm"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default VideoModule;
