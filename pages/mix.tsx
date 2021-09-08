import { GetServerSideProps } from "next";
import Head from 'next/head'
import { Main, Spacer } from '../components'
import * as Spotify from "../services/spotify";
import prisma from "../lib/prisma";

export interface IArtist {
  id: string;
  name: string;
}

export interface ITrack {
  artists: IArtist[];
  id: string;
  name: string;
}

interface IMix {
  playlist: {
    track: ITrack;
  }[];
}

const Artists = ({ artists }: { artists: IArtist[] }) => (
  <>
    {artists.map(({ id, name }) => (
      <span key={id} className="inline-flex">{name}</span>
    ))}
  </>
);

const TrackListItem: React.FC<ITrack> = ({ artists, name }) => {
  return (
      <tr className="flex flex-col md:table-row w-full border-b border-gt-pink">
          <td className="text-2xl md:w-3/4 pt-2 md:pb-2 pl-2 pr-2 md:pr-0">{name}</td>
          <td className="text-2xl w-full md:w-1/4 pb-2 md:pt-2 pr-2 pl-2 md:pl-0 md:text-right">
              <Artists artists={artists} />
          </td>
      </tr>
  );
};

export default function Mix({ playlist }: IMix) {
  const pageTitle = "The Marathon Mix";

  return (
    <Main opaque>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-5xl text-gt-orange">{pageTitle}</h2>
      <Spacer size={8} />
      <table className="md:table-auto w-full">
          <tbody className="flex flex-col md:table-row-group">
          {playlist.map(({ track }) => <TrackListItem key={track.id} artists={track.artists} name={track.name} id={track.id} />)}
          </tbody>
      </table>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const user = await prisma.user.findUnique({
    where: {
      spotifyId: process.env.SPOTIFY_USER_ID as string,
    },
  });

  if (!user) {
    return {
      props: { playlist: [] },
    };
  }

  const token = await Spotify.refreshToken(user.token as Spotify.SpotifyToken);

  await prisma.user.update({
      where: {
          id: user.id,
      },
      data: {
          token: {
              ...(user.token as {}),
              access_token: token?.access_token,
          },
      },
  });

  const playlistId = process.env.SPOTIFY_PLAYLIST_ID as string;

  const playlist = await Spotify.getPlaylist({ token: token?.access_token as string, playlistId });

  return {
    props: {
      playlist: playlist.tracks.items,
    },
  };
};
