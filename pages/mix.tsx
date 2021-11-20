import Head from 'next/head'
import { Main, Spacer, CloseButton, TextLinkButton } from '../components'
import { useEffect,  useState } from "react";

export interface IArtist {
  id: string;
  name: string;
}

export interface ITrack {
  artists: IArtist[];
  id: string;
  name: string;
}

export interface IItem {
  track: ITrack;
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

export default function Mix() {
  const pageTitle = "The Marathon Mix";
  const [tracks, setTracks] = useState<IItem[]>([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch("/api/mix")
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.items);
        setTotal(data.total);
        setOffset(data.offset + data.limit);
      });
  }, []);

  const loadMore = () => {
    fetch(`/api/mix?limit=${100}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setTracks(tracks.concat(data.items));
      });
  };

  return (
    <Main opaque>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-5xl text-gt-orange font-bold">{pageTitle}</h2>
      <CloseButton />
      <Spacer size={8} />
      {tracks.length > 0 && (
        <table className="md:table-auto w-full">
            <tbody className="flex flex-col md:table-row-group">
            {tracks.map(({ track }) => {
              return <TrackListItem key={track.id} artists={track.artists} name={track.name} id={track.id} />
            })}
            </tbody>
        </table>
      )}
      {
        tracks.length < total ? (
          <>
            <Spacer size={8} />
            <button type="button" onClick={loadMore}>Load more</button>
          </>
        ) : null
      }
      <Spacer size={8} />
      <TextLinkButton href="/donate">Give money + music</TextLinkButton>
      <Spacer size={4} />
    </Main>
  );
}
