import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import * as Spotify from "../../services/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await prisma.user.findUnique({
        where: {
            spotifyId: process.env.SPOTIFY_USER_ID as string,
        },
    });

    if (!user) {
        res.status(200).json({ playlist: [] });
        return;
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
    const offset = req.query.offset as string;

    const playlist = await Spotify.getPlaylist({
        token: token?.access_token as string,
        playlistId,
        offset: parseInt(offset || "0", 10),
    });

    res.status(200).json(playlist);
}
