import { ChangeEvent, FormEvent, useState } from "react";
import { SearchIcon } from "../Icons";

interface ISearchForm {
    onSubmit: (query: string) => void;
}

export const SearchForm: React.FC<ISearchForm> = ({ onSubmit }) => {
    const [query, setQuery] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <div className="flex-1">
                <label htmlFor="q" className="sr-only">Search by track name or artist</label>
                <input
                    type="search"
                    id="q"
                    name="q"
                    className="text-2xl p-2 border-b border-gt-green w-full bg-transparent"
                    onChange={handleChange}
                    value={query}
                    placeholder="Search for song or artist"
                />
            </div>
            <button type="submit" className="p-2 border-b border-gt-green flex-none text-gt-blue">
                <span className="sr-only">Search</span>
                <SearchIcon />
            </button>
        </form>
    );
}