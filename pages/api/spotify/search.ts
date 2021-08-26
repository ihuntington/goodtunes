import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

type SpotifyToken = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

let token: SpotifyToken;

const getAuthorization = async () => {
    if (token) {
        return token.access_token;
    }

    const encodedIdSecret = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`, "utf-8").toString("base64");

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedIdSecret}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
    });
    const data = await response.json() as SpotifyToken;

    token = data;

    return token.access_token;
};

const searchTracks = async (query: string) => {
    try {
        const accessToken = await getAuthorization();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = await response.json();

        if (data.tracks.items.length === 0) {
            return [];
        }

        // TODO: add types
        const tracks = data.tracks.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            artists: item.artists.map((artist: any) => ({
                name: artist.name,
                id: artist.id,
            })),
        }));

        return tracks;
    } catch (err) {
        console.info(`searchTracks - query: ${query}`);
        console.error(err);
        return [];
    }
};

export default async function spotifySearch(req: NextApiRequest, res: NextApiResponse) {
    const { q } = req.query;
    const tracks = await searchTracks(q as string);
    res.status(200).json(tracks);
}
