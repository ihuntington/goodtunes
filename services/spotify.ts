import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import urljoin from "url-join";

export type SpotifyToken = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

type AccessToken = { token: string };

export const authorize = (req: NextApiRequest, res: NextApiResponse) => {
    console.info("Spotify.Authorize");
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = urljoin(process.env.SPOTIFY_REDIRECT_URL as string, "/api/auth/spotify");
    // A space-separated list of scopes
    const scope = "playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative";
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
    console.info("Spotify.Authorize Redirect URI", redirectUri);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html><head><meta http-equiv="refresh" content="0; URL='${url}'" /></head><body></body></html>`);
    res.end();
};

export const refreshToken = async (token: SpotifyToken) => {
    try {
        const encodedIdSecret = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`, "utf-8").toString("base64");

        const params = new URLSearchParams();
        params.set("grant_type", "refresh_token");
        params.set("refresh_token", token.refresh_token);

        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${encodedIdSecret}`,
            },
            body: params,
        });

        if (response.ok) {
            return await response.json() as SpotifyToken;
        }

        return null;
    } catch (err) {
        console.log("Failed to request refresh token");
        console.error(err);
        return null;
    }
};

export const getToken = async (code: string) => {
    console.info("Spotify.getToken");
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

        console.info("Failed Spotify.getToken");
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
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (err) {
        console.log("Failed to get user profile");
        console.error(err);
        return null;
    }
};

export const addTrackToPlaylist = async ({ token, trackId }: { token: string; trackId: string }) => {
    try {
        const url = urljoin(process.env.SPOTIFY_API_URL as string, "/v1/playlists/", process.env.SPOTIFY_PLAYLIST_ID as string, "/tracks");
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uris: [`spotify:track:${trackId}`] }),
        });

        console.info("Spotify.addTrackToPlaylist");
        console.log(response);

        if (!response.ok) {
            return null
        }

        const data = await response.json();

        return data;
    } catch (err) {
        console.log("Failed to add items to playlist");
        console.error(err);
        return null;
    }
};

// export class Spotify {
//     _token: SpotifyToken;

//     constructor(token: SpotifyToken) {
//         this._token = token;
//     }

//     get headers() {
//         return {
//             Authorization: `Bearer ${this._token.access_token}`,
//         };
//     }

//     async request({ method, url, headers }: { method: "GET" | "POST", url: string, headers?: { [k: string]: string }}) {
//         try {
//             const response = await fetch(url, {
//                 headers: headers || this.headers,
//             });

//             if (response.ok) {
//                 return await response.json();
//             }

//             return null;
//         } catch (err) {
//             console.log(`Request failed ${method} ${url}`);
//             console.error(err);
//             return null;
//         }
//     }

//     async refreshToken() {
//         const encodedIdSecret = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`, "utf-8").toString("base64");

//         const params = new URLSearchParams();
//         params.set("grant_type", "refresh_token");
//         params.set("refresh_token", this._token.refresh_token);

//         const response = await this.request({
//             method: "POST",
//             url: "https://accounts.spotify.com/api/token",
//             headers: {
//                 Authorization: `Basic ${encodedIdSecret}`,
//             },
//         });

//         return response;
//     }

//     async getPlaylist(playlistId: string) {
//         const params = new URLSearchParams();
//         params.append("fields", "tracks.items(track(name, artists(name)))");

//         const url = urljoin(process.env.SPOTIFY_API_URL as string, "/v1/playlists/", playlistId, `${params.toString()}`);

//         const response = await this.request({
//             method: "GET",
//             url,
//         });
//     }
// }

export const getPlaylist = async ({ token, playlistId, offset = 0 }: AccessToken & { playlistId: string; offset: number }) => {
    const params = new URLSearchParams();
    params.append("offset", offset.toString());
    params.append("fields", "items(track(name, artists(name), id)),href,limit,next,offset,previous,total");

    const url = urljoin(process.env.SPOTIFY_API_URL as string, "/v1/playlists/", playlistId, "tracks", `?${params.toString()}`);

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        }

        return null;
    } catch (err) {
        console.log("Failed to get playlist");
        console.error(err);
        return null;
    }
};