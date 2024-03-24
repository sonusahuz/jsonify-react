import { NextRequest, NextResponse } from "next/server";
import posts from "@/data/posts.json";

// get all posts
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultPosts = [...posts];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultPosts = resultPosts.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultPosts = resultPosts.slice(0, limit);
    }

    return NextResponse.json({ posts: resultPosts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// create posts
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = posts.length + 1;

    const newPosts = {
      id,
      ...body,
    };
    posts.push(newPosts);
    return NextResponse.json({ posts: newPosts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
