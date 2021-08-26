import { useState } from "react";
import { Spacer } from "../Spacer";
import { SearchResults } from "./SearchResults";
import { SearchForm } from "./SearchForm";
import { useSearch } from "./useSearch";

export const Search = () => {
    const [items, setItems] = useState<any[]>([]);
    const { searchTracks } = useSearch();

    const handleSubmit = async (query: string) => {
        const tracks = await searchTracks(query);
        setItems(tracks);
    };

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            <Spacer size={4} />
            <SearchResults items={items} />
        </>
    );
};
