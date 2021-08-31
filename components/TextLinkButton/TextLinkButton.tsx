import Link from 'next/link'

export const TextLinkButton:React.FC<{ href: string }> = ({ children, href }) => (
    <Link href={href}>
        <a className="inline-block bg-gt-blue focus:bg-gt-light-blue hover:bg-gt-light-blue text-2xl text-white p-4">{children}</a>
    </Link>
);