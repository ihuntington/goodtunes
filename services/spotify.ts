import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import urljoin from "url-join";

type SpotifyToken = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export const authorize = (req: NextApiRequest, res: NextApiResponse) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = urljoin(process.env.SPOTIFY_REDIRECT_URL as string, "/api/auth/spotify");
    // A space-separated list of scopes
    const scope = "playlist-modify-public";
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<meta http-equiv=\"refresh\" content=\"time; URL=" + url + "\" />");
    res.end();
};

export const getToken = async (code: string) => {
    try {
        const redirectUri = urljoin(process.env.SPOTIFY_REDIRECT_URL as string, "/api/auth/spotify");
        const url = "https://accounts.spotify.com/api/token";
        const encodedIdSecret = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`, "utf-8").toString("base64");

        const params = new URLSearchParams();
        params.set("grant_type", "authorization_code");
        params.set("code", code);
        params.set("redirect_uri", redirectUri);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${encodedIdSecret}`,
            },
            body: params,
        });

        if (response.ok) {
            const data = await response.json() as SpotifyToken;
            return data;
        }

        return null
    } catch (err) {
        console.log("Failed to request access and refresh tokens");
        console.error(err);
        return null;
    }
};

export const getUserProfile = async ({ token }: { token: string }) => {
    try {
        const url = urljoin(process.env.SPOTIFY_API_URL as string, "/v1/me");
        console.log("url", url);
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const t = await response.json();
            return null;
        }

        return await response.json();
    } catch (err) {
        console.log("Failed to get user profile");
        console.error(err);
        return null;
    }
};

// export const getTrack = async (id: string) => {

// }