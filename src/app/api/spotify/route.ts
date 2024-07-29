import SpotifyApi from "spotify-web-api-node";
import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID || "";
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
const spotifyRefreshToken = process.env.SPOTIFY_CLIENT_REFRESH_TOKEN || "";

const spotifyApi = new SpotifyApi({
  clientId: spotifyClientId,
  clientSecret: spotifyClientSecret,
  refreshToken: spotifyRefreshToken
});

async function refreshSpotifyAccessToken() {
  const refreshTokenResponse = await spotifyApi.refreshAccessToken();

  spotifyApi.setAccessToken(refreshTokenResponse.body.access_token);
  
  setTimeout(refreshSpotifyAccessToken, refreshTokenResponse.body.expires_in);
}

const getRecentlyPlayedTracks = async () => {
  console.log('HIT')
  const response = await cache(async () => await spotifyApi.getMyRecentlyPlayedTracks({ limit: 5 }))();

  return response.body.items.map((item) => {
    return {
      name: item.track.name,
      artists: item.track.artists.map((artist) => artist.name).join(", "),
      album: item.track.album.name,
      image: item.track.album.images[0].url
    };
  });
};

export async function GET(req: NextRequest) {
  let accessToken = spotifyApi.getAccessToken();
  if (!accessToken) {
    await refreshSpotifyAccessToken();
  }

  const response = await cache(async () => getRecentlyPlayedTracks())();

  const recentlyPlayed = response;

  return NextResponse.json({
    recentlyPlayed
  });
}