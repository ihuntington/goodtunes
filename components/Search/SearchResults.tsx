import React, { useState } from "react";
import cx from "classnames";

export interface IArtist {
    id: string;
    name: string;
}

export interface ITrack {
    artists: IArtist[];
    id: string;
    name: string;
}

interface ISearchResultItem extends ITrack {
    onClick: ({ id, artists, name }: ITrack) => void;
    selected: boolean;
}

interface ISearchResults {
    items: ITrack[];
    onSelect: ({ id, artists, name }: ITrack) => void;
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
    const classNames = cx("flex flex-col md:table-row w-full border-b border-gt-pink hover:bg-gt-yellow hover:cursor-pointer", {
        "bg-gt-yellow": selected,
    });

    return (
        <tr className={classNames} onClick={() => onClick({ artists, name, id })}>
            <td className="text-2xl md:w-3/4 pt-2 md:pb-2 pl-2 pr-2 md:pr-0">{name}</td>
            <td className="text-2xl w-full md:w-1/4 pb-2 md:pt-2 pr-2 pl-2 md:pl-0 md:text-right">
                <Artists artists={artists} />
            </td>
        </tr>
    );
};

export const SearchResults: React.FC<ISearchResults> = ({ items, onSelect, selectedId }) => {
    return (
        <table className="md:table-auto w-full">
            <tbody className="flex flex-col md:table-row-group">
            {items.map(({ artists, name, id }) => <SearchResultItem key={id} artists={artists} name={name} id={id} onClick={onSelect} selected={selectedId === id} />)}
            </tbody>
        </table>
    );
};
