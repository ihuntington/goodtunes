import React from "react";
import Image from "next/image";
import cx from "classnames";
import BenImage from "../../public/ben-london-2021-landscape.jpg"
import LogoNavy from "../../public/logo-navy.png";

export const Main: React.FC<{ opaque?: boolean, showLogo?: boolean }> = ({ children, opaque = false, showLogo = true }) => {
    return (
        <div className="grid grid-cols-1">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 z-0">
                <div className="relative md:h-full">
                    <Image layout="fill" objectFit="cover" src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" />
                </div>
            </div>
            <div className={cx("col-start-1 col-end-1 row-start-1 row-end-1 z-10 relative", { "bg-gt-main-opaque": opaque })}>
                <div className="p-8 md:p-5">
                    {children}
                    {/* TODO: improve spacing between content and logo */}
                    {showLogo && (
                        <>
                            <div className="h-8 md:hidden"></div>
                            <div className="flex justify-center md:hidden">
                                <Image src={LogoNavy} alt="Good Tunes" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}