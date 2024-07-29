import SpotifyApi from "spotify-web-api-node";
import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { url } from "inspector";

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
  const response = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 5 });

  return response.body.items.map((item) => {
    return {
      name: item.track.name,
      artists: item.track.artists.map((artist) => artist.name).join(", "),
      album: item.track.album.name,
      image: item.track.album.images[0].url,
      played: item.played_at,
      url: item.track.external_urls.spotify
    };
  });
};

const getRecentlyLikedTracks = async () => {
  const response = await spotifyApi.getMySavedTracks({ limit: 5 });
  
  return response.body.items.map((item) => {
    return {
      name: item.track.name,
      artists: item.track.artists.map((artist) => artist.name).join(", "),
      album: item.track.album.name,
      image: item.track.album.images[0].url,
      liked: item.added_at,
      url: item.track.external_urls.spotify
    };
  });
};

const getCurrentlyPlayingTrack = async () => {
  const response: any = await spotifyApi.getMyCurrentPlayingTrack();

  return {
    name: response?.body?.item?.name,
    url: response?.body?.item?.external_urls?.spotify,
    artists: response?.body?.item?.artists.map((artist: any) => artist.name).join(", "),
    album: response?.body?.item?.album.name,
    image: response?.body?.item?.album.images[0].url
  }
};

export async function GET(req: NextRequest) {
  let accessToken = spotifyApi.getAccessToken();
  if (!accessToken) {
    await refreshSpotifyAccessToken();
  }

  

  const recentlyPlayed = await unstable_cache(getRecentlyPlayedTracks, ["recentlyPlayedTracks"], {
    revalidate: 3600
  })();

  const currentlyPlaying = await unstable_cache(getCurrentlyPlayingTrack, ["currentlyPlayingTrack"], {
    revalidate: 60
  })();

  const recentlyLiked = await unstable_cache(getRecentlyLikedTracks, ["recentlyLikedTracks"], {
    revalidate: 3600
  })();

  return NextResponse.json({
    recentlyPlayed,
    currentlyPlaying,
    recentlyLiked
  });
}