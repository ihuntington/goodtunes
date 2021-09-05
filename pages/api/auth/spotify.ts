import type { NextApiRequest, NextApiResponse } from 'next';
import { authorize, getToken, getUserProfile } from '../../../services/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.code) {
        const token = await getToken(req.query.code as string);

        if (!token) {
            res.status(400).send("");
            return;
        }

        const user = await getUserProfile({ token: token.access_token });

        if (!user) {
            res.status(400).send("");
            return;
        }

        res.status(200).json({ user, token });
        return;
    } else if (req.query.error) {
        console.log("Failed to authorise:", req.query.error);
        res.status(400).send("");
        return;
    }

    authorize(req, res);
}