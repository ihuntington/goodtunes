import { ChangeEvent, useState } from "react";
import { Spacer } from "../Spacer";
import { SearchResults } from "./SearchResults";
import { SearchForm } from "./SearchForm";
import { useSearch } from "./useSearch";
import { TextLinkButton } from "../TextLinkButton";

export const Search = () => {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<string>("");
    const { searchTracks } = useSearch();

    const handleSubmit = async (query: string) => {
        const tracks = await searchTracks(query);
        setItems(tracks);
    };

    const handleReset = () => {
        setItems([]);
        setSelected("");
    };

    const handleSelect = (id: string) => {
        setSelected(id);
    };

    return (
        <>
            <SearchForm onSubmit={handleSubmit} onReset={handleReset} />
            <Spacer size={4} />
            <SearchResults items={items} onSelect={handleSelect} selectedId={selected} />
            {!!selected && (
                <div className="absolute bottom-0 left-0 p-8 flex justify-end bg-white w-full">
                    <TextLinkButton href={`/donate/confirm?spotifyId=${selected}`}>Continue</TextLinkButton>
                </div>
            )}
        </>
    );
};
