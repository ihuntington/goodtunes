import urljoin from "url-join";

export interface DonationResponse {
    amount: string;
    currencyCode: string;
    donationDate: string;
    donationRef: string;
    donorDisplayName: string;
    donorLocalAmount: string;
    donorLocalCurrencyCode: string;
    donorRealName: string;
    estimatedTaxReclaim: number;
    id: number;
    image: string;
    message: string;
    source: string;
    status: "Accepted" | "Rejected" | "Cancelled" | "Refunded" | "Pending";
    thirdPartyReference: string;
}

export const getDonationById = async (id: string) => {
    try {
        const url = urljoin(process.env.JUST_GIVING_API_URL as string, "v1", "donation", id);

        const response = await fetch(url, {
            headers: {
                "x-api-key": process.env.JUST_GIVING_API_KEY as string,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json() as DonationResponse;
    } catch (err) {
        console.info("Failed to fetch donation by ID:", id);
        console.error(err);
        return null;
    }
};
