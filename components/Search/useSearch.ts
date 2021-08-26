export const useSearch = () => {
    const searchTracks = async (query: string) => {
        const response = await fetch(`/api/spotify/search?q=${query}`);
        const tracks = await response.json();
        return tracks;
    }

    return {
        searchTracks,
    };
};
