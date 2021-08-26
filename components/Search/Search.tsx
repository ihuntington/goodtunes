import { ChangeEvent, FormEvent, useState } from "react";
import { Spacer } from "../Spacer";
import { SearchResults } from "./SearchResults";
import { useSearch } from "./useSearch";

export const Search = () => {
    const [query, setQuery] = useState<string>("");
    const [items, setItems] = useState<any[]>([]);
    const { searchTracks } = useSearch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const tracks = await searchTracks(query);
        console.log(tracks);
        setItems(tracks);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="q">Search by track name or artist</label>
                    <input
                        type="search"
                        id="q"
                        name="q"
                        className="text-2xl border-b border-gt-green w-full bg-transparent"
                        onChange={handleChange}
                        value={query}
                    />
                </p>
                <button type="submit">
                    Search
                </button>
            </form>
            <Spacer size={4} />
            <SearchResults items={items} />
        </>
    );
};
