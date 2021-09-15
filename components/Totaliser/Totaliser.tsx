import { useEffect, useState } from "react";
import differenceInDays from "date-fns/differenceInDays";

interface IFundraiser {
    currencySymbol: string;
    currencyCode: string;
    fundraisingTarget: string,
    totalRaisedPercentageOfFundraisingTarget: string,
    totalRaisedOffline: string,
    totalRaisedOnline: string,
    grandTotalRaisedExcludingGiftAid: string;
}

export const Totaliser = () => {
    const [raised, setRaised] = useState(0);
    const [raisedPercent, setRaisedPercent] = useState(0);
    const targetDate = new Date(2021, 9, 3);
    const today = new Date();
    const daysRemaining = differenceInDays(targetDate, today);

    useEffect(() => {
        fetch("/api/fundraiser")
            .then((response) => response.json())
            .then((fundraiser: IFundraiser) => {
                setRaisedPercent(parseInt(fundraiser.totalRaisedPercentageOfFundraisingTarget, 10))
                setRaised(parseInt(fundraiser.grandTotalRaisedExcludingGiftAid, 10));
            })
            .catch((err) => {
                console.log("Failed to fetch /api/fundraiser");
                console.error(err);
            });
    }, []);

    return (
        <div>
            <p className="text-2xl text-gt-green">Ben’s reached...</p>
            <div className="h-4"></div>
            <p className="text-5xl text-gt-green font-bold">
                {`£${raised}`}
            </p>
            <div className="h-4"></div>
            <div className="relative">
                <div className="h-6 bg-gt-green transition-transform origin-left duration-300" style={{ transform: `scaleX(${raisedPercent / 100})`}}></div>
                <div className="h-6 w-full bg-gt-green opacity-20 absolute top-0"></div>
            </div>
            <div className="h-4"></div>
            <p className="text-gt-green">{`${daysRemaining} days to go`}</p>
        </div>
    );
};
