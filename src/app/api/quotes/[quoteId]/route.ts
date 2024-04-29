import { NextRequest, NextResponse } from "next/server";
import quotes from "@/data/quotes.json";

// get products by id
export const GET = (
  req: NextRequest,
  { params }: { params: { quoteId: string } }
) => {
  try {
    const { quoteId } = params;
    const res = quotes.find((item) => item.id === Number(quoteId));
    return NextResponse.json({ quotes: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete products
export const DELETE = (
  req: NextRequest,
  { params }: { params: { quoteId: string } }
) => {
  try {
    const { quoteId } = params;
    const index = quotes.findIndex((item) => item.id === Number(quoteId));
    if (index !== -1) {
      quotes.splice(index, 1);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// update products
export const PUT = async (
  req: NextRequest,
  { params }: { params: { quoteId: string } }
) => {
  try {
    const { quoteId } = params;
    const body = await req.json();
    const index = quotes.findIndex((item) => item.id === Number(quoteId));
    if (index !== -1) {
      quotes[index] = { ...quotes[index], ...body, id: Number(quoteId) };
      return NextResponse.json(
        { success: true, quote: quotes[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
