import { nanoid } from "nanoid";

export const useSearch = () => {
    const searchTracks = async (query: string) => {
        const response = await fetch(`/api/spotify/search?q=${query}`);
        const tracks = await response.json();
        return tracks;
    };

    const createJustGivingLink = (spotifyId: string) => {
        // TODO: add some state to the URL?
        const exitUrl = `https://www.goodtunes.org/donate/thank-you?spotifyId=${spotifyId}&jgDonationId=JUSTGIVING-DONATION-ID`

        const params = new URLSearchParams();
        params.set("amount", "30.00");
        params.set("currency", "GBP");
        params.set("reference", nanoid(8));
        params.set("exitUrl", encodeURIComponent(exitUrl));
        params.set("message", "");

        return `http://link.justgiving.com/v1/fundraisingpage/donate/pageId/14331076?${params.toString()}`;
    };

    return {
        searchTracks,
        createJustGivingLink,
    };
};
