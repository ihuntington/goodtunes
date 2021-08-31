interface ITitle {
    as?: "h2" | "h3";
    color?: "violet" | "orange";
}

export const Title: React.FC<ITitle> = ({ as = "h2", color = "violet", children }) => {
    const Heading = as;
    const className = `text-5xl text-gt-${color}`;
    return (
        <Heading className={className}>{children}</Heading>
    );
}