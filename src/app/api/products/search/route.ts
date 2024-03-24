import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

// search products
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const searchQuery = req.nextUrl.searchParams.get("q");

    if (searchQuery) {
      const filteredPosts = products.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredPosts.length === 0) {
        return NextResponse.json({ error: "No posts found" }, { status: 404 });
      }

      return NextResponse.json({ products: filteredPosts }, { status: 200 });
    } else {
      // If no search query is provided, return all posts
      return NextResponse.json({ products: products }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
