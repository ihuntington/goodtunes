import { Spacer } from "../Spacer";
import { SearchResults } from "./SearchResults";

export const Search = () => {
    const items = [
        {
            name: "Like a Prayer",
            artist: "Madonna",
        },
        {
            name: "Sanpellegrino the Italian Sparkling Drink",
            artist: "Madonna",
        },
    ];

    return (
        <form>
            <p>
                <label htmlFor="q">Search by track name or artist</label>
                <input type="search" id="q" name="q" className="text-2xl border-b border-gt-green w-full bg-transparent" />
            </p>
            <button type="submit">
                Search
            </button>
            <Spacer size={4} />
            <SearchResults items={items} />
        </form>
    );
};
