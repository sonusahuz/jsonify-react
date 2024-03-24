import { NextRequest, NextResponse } from "next/server";
import posts from "@/data/posts.json";

// search posts
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const searchQuery = req.nextUrl.searchParams.get("q");

    if (searchQuery) {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredPosts.length === 0) {
        return NextResponse.json({ error: "No posts found" }, { status: 404 });
      }

      return NextResponse.json({ posts: filteredPosts }, { status: 200 });
    } else {
      return NextResponse.json({ posts: posts }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
