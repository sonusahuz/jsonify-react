import { NextRequest, NextResponse } from "next/server";
import users from "@/data/users.json";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const searchQuery = req.nextUrl.searchParams.get("q");

    if (searchQuery) {
      const filteredPosts = users.filter((post) =>
        post.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredPosts.length === 0) {
        return NextResponse.json({ error: "No posts found" }, { status: 404 });
      }

      return NextResponse.json({ users: filteredPosts }, { status: 200 });
    } else {
      // If no search query is provided, return all posts
      return NextResponse.json({ users: users }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
