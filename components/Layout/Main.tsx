import Image from "next/image";
import cx from "classnames";
import BenImage from "../../public/ben.jpg"

export const Main: React.FC<{ opaque?: boolean }> = ({ children, opaque = false }) => {
    return (
        <div className="grid grid-cols-1">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 z-0">
                <div className="relative md:h-full">
                    <Image layout="fill" objectFit="cover" src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" />
                </div>
            </div>
            <div className={cx("col-start-1 col-end-1 row-start-1 row-end-1 z-10", { "bg-gt-main-opaque": opaque })}>
                <div className="md:p-5">
                    <div className="z-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}