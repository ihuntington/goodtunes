import type { NextApiRequest, NextApiResponse } from "next";
import { searchTracks } from "../../../lib/spotify";

export default async function spotifySearch(req: NextApiRequest, res: NextApiResponse) {
    const { q } = req.query;
    const tracks = await searchTracks(q as string);
    res.status(200).json(tracks);
}
