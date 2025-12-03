import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
            summaryId
        } = await req.json();

        // console.log("Stripe Checkout:", { totalFee, discount, referral, feePaid, netFee, summaryId });

        if (!netFee || netFee <= 0) {
            throw new Error("Invalid net fee amount. Must be > 0.");
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "Vertix Tax Filing Fee",
                            description: `
Total Fee: ₹${totalFee}
Discount: ₹${discount}
Referral: ₹${referral}
Fee Paid: ₹${feePaid}
Net Amount: ₹${netFee}
          `
                        },
                        unit_amount: netFee * 100,
                    }
                }
            ],
            success_url: `${BASE_URL}/success?summary_id=${summaryId}`,
            cancel_url: `${BASE_URL}/payment-gateway?cancel=true`
        });


        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("STRIPE ERROR:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
