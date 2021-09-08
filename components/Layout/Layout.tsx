export const Layout: React.FC<{ aside: React.ReactNode }> = ({ aside, children }) => {
    return (
        <div className="container mx-auto h-full">
            <div className="p-2 h-full">
                <div className="md:grid md:grid-cols-12 md:gap-8 h-full">
                    <div className="md:col-span-4 lg:col-span-3 bg-white">
                        {aside}
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 grid">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
