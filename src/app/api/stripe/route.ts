import { NextResponse } from "next/server";
import Stripe from "stripe";

console.log("Its stripe key::",process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: "https://vertixtax.com/payment-success",
      cancel_url: "https://vertixtax.com/payment-cancel",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe session error:", err.message);
    return NextResponse.json(
      { error: "Stripe session creation failed" },
      { status: 500 }
    );
  }
}
