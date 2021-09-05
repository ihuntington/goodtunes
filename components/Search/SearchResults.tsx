import React, { useState } from "react";
import cx from "classnames";

interface IArtist {
    id: string;
    name: string;
}

interface ITrack {
    artists: IArtist[];
    id: string;
    name: string;
}

interface ISearchResultItem extends ITrack {
    onClick: (id: string) => void;
    selected: boolean;
}

interface ISearchResults {
    items: ITrack[];
    onSelect: (id: string) => void;
    selectedId: string;
}

const Artists = ({ artists }: { artists: IArtist[] }) => (
    <>
        {artists.map(({ id, name }) => (
            <span key={id} className="inline-flex">{name}</span>
        ))}
    </>
);

const SearchResultItem: React.FC<ISearchResultItem> = ({ artists, name, id, onClick, selected = false }) => {
    const classNames = cx("flex flex-col md:table-row w-full border-b border-gt-green hover:bg-gt-green hover:text-white hover:cursor-pointer", {
        "bg-gt-green": selected,
        "text-white": selected,
    });

    return (
        <tr className={classNames} onClick={() => onClick(id)}>
            <td className="text-2xl font-bold md:w-3/4 pt-2 md:pb-2 pl-2 pr-2 md:pr-0">{name}</td>
            <td className="text-2xl w-full md:w-1/4 pb-2 md:pt-2 pr-2 pl-2 md:pl-0 md:text-right">
                <Artists artists={artists} />
            </td>
        </tr>
    );
};

export const SearchResults: React.FC<ISearchResults> = ({ items, onSelect, selectedId }) => {
    return (
        <table className="md:table-auto w-full">
            <tbody className="text-gt-blue flex flex-col md:table-row-group">
            {items.map(({ artists, name, id }) => <SearchResultItem key={id} artists={artists} name={name} id={id} onClick={onSelect} selected={selectedId === id} />)}
            </tbody>
        </table>
    );
};
