export type FeeRow = {
    id: number;
    description: string;
    baseFee: number;
    noStatus?: boolean;
    status?: number | null;
    total?: number;
    fee?: number;
};

export type FeeTotals = {
    totalFee: number;
    discount: number;
    referral: number;
    feePaid: number;
    dueAmount: number;
    code: string;
    netFee: number;
};
