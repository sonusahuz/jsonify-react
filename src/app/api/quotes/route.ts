import { NextRequest, NextResponse } from "next/server";
import quotes from "@/data/quotes.json";

// get all products
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultQuotes = [...quotes];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultQuotes = resultQuotes.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultQuotes = resultQuotes.slice(0, limit);
    }

    return NextResponse.json({ quotes: resultQuotes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// create products
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = quotes.length + 1;

    const newQuote = {
      id,
      ...body,
    };
    quotes.push(newQuote);
    return NextResponse.json({ quotes: newQuote }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
