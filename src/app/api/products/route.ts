import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

// get all products
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultProducts = [...products];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultProducts = resultProducts.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultProducts = resultProducts.slice(0, limit);
    }

    return NextResponse.json({ products: resultProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// create products
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = products.length + 1;

    const newPosts = {
      id,
      ...body,
    };
    products.push(newPosts);
    return NextResponse.json({ products: newPosts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
