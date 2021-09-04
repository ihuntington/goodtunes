import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";
import urljoin from "url-join";

interface JustGivingFundraiserResponse {
    currencySymbol: string;
    currencyCode: string;
    fundraisingTarget: string,
    totalRaisedPercentageOfFundraisingTarget: string,
    totalRaisedOffline: string,
    totalRaisedOnline: string,
    grandTotalRaisedExcludingGiftAid: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const url = urljoin(process.env.JUST_GIVING_API_URL as string, "v1/fundraising/pages/benjamin-schwab1");
        // const url = "https://api.justgiving.com/v1/fundraising/pages/benjamin-schwab1";
        const response = await fetch (url, {
            headers: {
                "x-api-key": process.env.JUST_GIVING_API_KEY as string,
                "Content-Type": "application/json",
            },
        });

        // Partially typed response
        const data = await response.json() as JustGivingFundraiserResponse;

        const fundraiser = {
            currencySymbol: data.currencySymbol,
            currencyCode: data.currencyCode,
            fundraisingTarget: data.fundraisingTarget,
            totalRaisedPercentageOfFundraisingTarget: data.totalRaisedPercentageOfFundraisingTarget,
            totalRaisedOffline: data.totalRaisedOffline,
            totalRaisedOnline: data.totalRaisedOnline,
            grandTotalRaisedExcludingGiftAid: data.grandTotalRaisedExcludingGiftAid,
        };

        res.status(200).json(fundraiser);
    } catch (err) {
        res.status(500).send("");
    }
}