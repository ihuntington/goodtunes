interface ITitle {
    as?: "h2" | "h3";
}

export const Title: React.FC<ITitle> = ({ as = "h2", children }) => {
    const Heading = as;
    return (
        <Heading className="text-5xl text-gt-orange">{children}</Heading>
    );
}