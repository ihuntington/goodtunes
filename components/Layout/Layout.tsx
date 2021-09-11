export const Layout: React.FC<{ aside: React.ReactNode }> = ({ aside, children }) => {
    return (
        <div className="h-full grid grid-cols-gt-frame grid-rows-gt-frame">
            <div className="mx-auto h-full w-full col-start-2 row-start-2" >
                <div className="p-2 md:p-0 h-full">
                    <div className="md:grid md:grid-cols-gt-layout h-full">
                        <div className="md:col-start-1 md:p-5 md:pt-4 bg-white">
                            {aside}
                        </div>
                        <div className="md:col-start-2 grid">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gt-light-blue col-start-1 col-span-2"></div>
            <div className="bg-gt-orange col-start-3 row-start-1 row-span-2"></div>
            <div className="bg-gt-yellow col-start-2 col-span-2 row-start-3"></div>
            <div className="bg-gt-violet col-start-1 row-start-2 row-span-2"></div>
        </div>
    );
};
