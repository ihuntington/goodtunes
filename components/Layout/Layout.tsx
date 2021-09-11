export const Layout: React.FC<{ aside: React.ReactNode }> = ({ aside, children }) => {
    return (
        <div className="h-full" style={{ display: "grid", gridTemplateColumns: "10px 1fr 10px", gridTemplateRows: "10px 1fr 10px" }}>
            <div className="mx-auto h-full" style={{ gridColumnStart: "2", gridRowStart: "2" }} >
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
            <div className="bg-gt-light-blue" style={{ gridColumnStart: "1", gridColumnEnd: "3" }}></div>
            <div className="bg-gt-orange" style={{ gridColumnStart: "3", gridRowStart: "1", gridRowEnd: "-1" }}></div>
            <div className="bg-gt-yellow" style={{ gridColumnStart: "2", gridColumnEnd: "-1", gridRowStart: "3" }}></div>
            <div className="bg-gt-violet" style={{ gridColumnStart: "1", gridRowStart: "2", gridRowEnd: "-1" }}></div>
        </div>
    );
};
