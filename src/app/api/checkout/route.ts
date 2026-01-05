import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST!);
// console.log("Black sheep ", process.env.STRIPE_SECRET_KEY_TEST)

const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://vertixtax.com"
        : "http://localhost:3000";

export async function POST(req: Request) {
    try {
        const {
            totalFee,
            discount,
            referral,
            feePaid,
            netFee,
            dueAmount,
            summaryId,
            filingYearId
        } = await req.json();

        // console.log("Stripe Checkout:", { totalFee, discount, referral, feePaid, netFee, dueAmount, summaryId, filingYearId });

        if (typeof dueAmount !== "number" || isNaN(dueAmount)) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        if (!dueAmount || dueAmount <= 0) {
            return NextResponse.json(
                { error: "No amount due for payment" },
                { status: 400 }
            );
        }

        if (process.env.NODE_ENV === "production" && (!netFee || netFee <= 0)) {
            throw new Error("Invalid net fee amount. Must be > 0.");
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Vertix Tax Filing Fee",
                            description: `
Total Fee: $${totalFee}
Discount: $${discount}
Referral: $${referral}
Fee Paid: $${feePaid}
Due Amount: $${dueAmount}
          `
                        },
                        unit_amount: Math.round(dueAmount * 100),
                    }
                }
            ],
            success_url: `${BASE_URL}/success?summaryId=${summaryId}&filing_year=${filingYearId}`,
            cancel_url: `${BASE_URL}/payment-gateway?cancel=true`
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("STRIPE ERROR:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}