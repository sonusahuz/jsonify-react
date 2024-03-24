import { NextRequest, NextResponse } from "next/server";
import recipes from "@/data/recipes.json";

// search posts
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const searchQuery = req.nextUrl.searchParams.get("q");

    if (searchQuery) {
      const filteredPosts = recipes.filter((post) =>
        post.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredPosts.length === 0) {
        return NextResponse.json({ error: "No posts found" }, { status: 404 });
      }
      return NextResponse.json({ recipes: filteredPosts }, { status: 200 });
    } else {
      return NextResponse.json({ posts: recipes }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
