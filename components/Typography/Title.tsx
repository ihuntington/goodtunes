export const Title: React.FC<{ as?: "h2" | "h3" }> = ({ as = "h2", children }) => {
    const Heading = as;
    return (
        <Heading className="text-5xl text-gt-blue">{children}</Heading>
    );
}