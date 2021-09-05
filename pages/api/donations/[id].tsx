import type { NextApiRequest, NextApiResponse } from 'next';
import urljoin from "url-join";
import fetch from "node-fetch";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    const url = urljoin(process.env.JUST_GIVING_API_URL as string, "/v1/donation", req.query.id as string);
    const apiKey = process.env.JUST_GIVING_API_KEY;

    if (!apiKey) {
        res.status(400).send("");
        return;
    }

    fetch(url, {
        headers: {
            "x-api-key": apiKey,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log("Failed to fetch donation by ID");
            console.error(err);
            res.status(400).send("");
        });
}
