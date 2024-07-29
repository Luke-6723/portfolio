"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpotifySidebar() {
  const [loading, setLoading] = useState(true);
  const [spotify, setSpotify] = useState({}) as any;

  useEffect(() => {
    (async () => {
      const spotifyFetch = await fetch("/api/spotify");

      const spotifyData = await spotifyFetch.json();

      setSpotify(spotifyData);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex flex-col justify-center w-3/4 self-center">
          <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Currently Playing</span>
          <div className="flex flex-row gap-2">
          </div>
        </div>
        <div className="flex flex-col justify-center w-3/4 self-center">
          <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Recently Liked Songs</span>
          <div className="flex flex-col gap-2">
          </div>
        </div>
        <div className="flex flex-col justify-center w-3/4 self-center">
          <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Recent Listens</span>
          <div className="flex flex-col gap-2">
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center w-3/4 self-center">
        <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Currently Playing</span>
        <div className="flex flex-row gap-2">
          <div>
            <Image className="rounded-md" width={64} height={64} alt="Spotify album cover" src={spotify?.currentlyPlaying?.image} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-rose-500 underline">
              <Link target="_blank" href={spotify?.currentlyPlaying?.url}>
                {spotify?.currentlyPlaying?.name}
              </Link>
            </span>
            <span className="text-sm">{spotify?.currentlyPlaying?.artists}</span>
            <span className="text-sm">{spotify?.currentlyPlaying?.album}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-3/4 self-center">
        <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Recently Liked Songs</span>
        <div className="flex flex-col gap-2">
          {spotify.recentlyLiked.map((liked: any) => (
            <div key={liked.name} className="flex flex-row gap-2">
              <div>
                <Image className="rounded-md" width={64} height={64} alt="Spotify album cover" src={liked.image} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-rose-500 underline">
                  <Link target="_blank" href={liked.url}>{liked.name}</Link>
                </span>
                <span className="text-sm">{liked.artists}</span>
                <span className="text-sm">{liked.album}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center w-3/4 self-center">
        <span className="border-y-2 border-y-white/25 my-2 py-2 text-center text-lg">Recent Listens</span>
        <div className="flex flex-col gap-2">
          {spotify.recentlyPlayed.map((played: any) => (
            <div key={played.name} className="flex flex-row gap-2">
              <div>
                <Image className="rounded-md" width={64} height={64} alt="Spotify album cover" src={played.image} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-rose-500 underline"><Link target="_blank" href={played.url}>{played.name}</Link></span>
                <span className="text-sm">{played.artists}</span>
                <span className="text-sm">{played.album}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}