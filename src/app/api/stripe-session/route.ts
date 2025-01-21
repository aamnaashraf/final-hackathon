import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Retrieve the secret key from environment variables
const key = process.env.STRIPE_SECRET_KEY || "";

if (!key) {
  throw new Error("Stripe secret key is not defined. Please check your environment variables.");
}

// Initialize the Stripe instance
const stripe = new Stripe(key, {
  apiVersion: "2024-12-18.acacia", // Use a stable version
});

export async function POST(request: NextRequest) {
  try {
    const body: { name: string; price: number; quantity: number }[] = await request.json();

    if (body.length === 0) {
      return NextResponse.json({ message: "No Data Found" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1QiQ3nJL3m5awNrTGDE00Wve" },
        { shipping_rate: "shr_1QiQ2QJL3m5awNrTL6ycm50E" },
      ],
      line_items: body.map((item) => ({
        price_data: {
          currency: "pkr",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert price to cents
        },
        quantity: item.quantity,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
      })),
      phone_number_collection: { enabled: true },
      success_url: `${request.headers.get("origin")}/success?cart=${JSON.stringify(body)}`,
      cancel_url: `${request.headers.get("origin")}/canceled?cart=${JSON.stringify(body)}`,
    });

    // Return session and cart items for front-end usage
    return NextResponse.json({
      session,
      cartItems: body, // Include cart items in the response
    });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json(
      { message: "Failed to create Stripe session. Please try again later." },
      { status: 500 }
    );
  }
}
