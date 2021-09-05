import { ChangeEvent, useState } from "react";
import { Spacer } from "../Spacer";
import { SearchResults, ITrack } from "./SearchResults";
import { SearchForm } from "./SearchForm";
import { useSearch } from "./useSearch";
import { TextLinkButton } from "../TextLinkButton";

export const Search = () => {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<string>("");
    const { searchTracks, createJustGivingLink } = useSearch();

    const handleSubmit = async (query: string) => {
        const tracks = await searchTracks(query);
        setItems(tracks);
    };

    const handleReset = () => {
        setItems([]);
        setSelected("");
    };

    const handleSelect = (track: ITrack) => {
        setSelected(track.id);
    };

    return (
        <>
            <SearchForm onSubmit={handleSubmit} onReset={handleReset} />
            <Spacer size={4} />
            <div className="overflow-y-scroll pb-24">
                <SearchResults items={items} onSelect={handleSelect} selectedId={selected} />
            </div>
            {!!selected && (
                <div className="absolute bottom-0 left-0 py-8 flex justify-center bg-white md:bg-transparent w-full">
                    <TextLinkButton href={createJustGivingLink(selected)}>Donate with Just Giving</TextLinkButton>
                </div>
            )}
        </>
    );
};
