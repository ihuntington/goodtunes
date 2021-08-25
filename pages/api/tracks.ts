import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function tracksHandler(req: NextApiRequest, res: NextApiResponse) {
    const tracks = await prisma.track.findMany();
    res.json(tracks);
}