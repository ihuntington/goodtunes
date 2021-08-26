import React from "react";

type SearchResultItem = {
    artist: string;
    name: string;
}

const SearchResultItem: React.FC<SearchResultItem> = ({ artist, name }) => (
    <tr className="flex flex-col md:table-row w-full border-b border-gt-green hover:bg-gt-green hover:text-white">
        <td className="text-2xl font-bold md:w-3/4 pt-2 md:pb-2 pl-2 pr-2 md:pr-0">{name}</td>
        <td className="text-2xl w-full md:w-1/4 pb-2 md:pt-2 pr-2 pl-2 md:pl-0 md:text-right">{artist}</td>
    </tr>
);

export const SearchResults: React.FC<{ items: SearchResultItem[] }> = ({ items }) => {
    return (
        <table className="md:table-auto w-full">
            <tbody className="text-gt-blue flex flex-col md:table-row-group">
            {items.map(({ artist, name }) => <SearchResultItem key={name} artist={artist} name={name} />)}
            </tbody>
        </table>
    );
}