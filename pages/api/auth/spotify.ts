import type { NextApiRequest, NextApiResponse } from 'next';
import urljoin from "url-join";
import * as Spotify from "../../../services/spotify";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.code) {
        const token = await Spotify.getToken(req.query.code as string);

        if (!token) {
            console.info("No Spotify token");
            res.status(400).send("");
            return;
        }

        const profile = await Spotify.getUserProfile({ token: token.access_token });

        if (!profile) {
            console.info("No Spotify profile");
            res.status(400).send("");
            return;
        }

        try {
            console.info("Spotify Auth upsert user");
            await prisma.user.upsert({
                create: {
                    spotifyId: profile.id,
                    spotifyUri: profile.uri,
                    token,
                },
                update: {
                    spotifyId: profile.id,
                    spotifyUri: profile.uri,
                    token,
                },
                where: {
                    spotifyId: profile.id,
                },
            });

            const redirectUrl = urljoin(process.env.SPOTIFY_REDIRECT_URL as string, "/login/success");

            console.info("Spotify Auth redirect to success", redirectUrl);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<html><head><meta http-equiv="refresh" content="0; URL='${redirectUrl}'" /></head><body></body></html>`);
            res.end();

            return;
        } catch (err) {
            console.log("Failed to upsert user");
            console.error(err);
            res.status(400).send("");
            return;
        }

    } else if (req.query.error) {
        console.log("Failed to authorise:", req.query.error);
        res.status(400).send("");
        return;
    }

    Spotify.authorize(req, res);
}