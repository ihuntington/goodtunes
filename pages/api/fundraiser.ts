import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from "node-fetch";

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
    const apiKey = process.env.JUST_GIVING_API_KEY;

    if (!apiKey) {
        res.status(400).send("");
        return;
    }

    try {
        const url = "https://api.justgiving.com/v1/fundraising/pages/benjamin-schwab1";
        const response = await fetch (url, {
            headers: {
                "x-api-key": apiKey,
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