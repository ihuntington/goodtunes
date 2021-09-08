import Link from "next/link";

export const CloseButton = () => (
    <Link href="/">
        <a className="text-gt-blue focus:text-gt-light-blue hover:text-gt-light-blue absolute top-2 right-2 md:top-4 md:right-4">
            <span className="sr-only">To the home page</span>
            <svg className="w-8 md:w-12" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="45.2409" y1="0.353553" x2="1.24085" y2="44.3536" stroke="currentColor" />
                <line x1="44.5337" y1="44.3536" x2="0.533744" y2="0.353553" stroke="currentColor" />
            </svg>
        </a>
    </Link>
);
