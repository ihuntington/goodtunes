import {ChangeEvent, FormEvent, useState } from "react";

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
    );
}