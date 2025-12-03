import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { supabase } from "../../../../utils/supabase/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature")!;

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        // 👉 update Supabase here
        // Example:
        // await supabase.from("subscriptions").insert({ user: session.client_reference_id, ... });

        await supabase.from("subscriptions").insert({user: session.client_reference_id})
        console.log("Payment success:", session.id);
    }

    return NextResponse.json({ received: true });
}
