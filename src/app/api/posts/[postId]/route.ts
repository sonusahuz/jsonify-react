import { NextRequest, NextResponse } from "next/server";
import posts from "@/data/posts.json";

// get posts by id
export const GET = (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const { postId } = params;
    const res = posts.find((item) => item.id === Number(postId));
    return NextResponse.json({ posts: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete posts
export const DELETE = (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const { postId } = params;
    const index = posts.findIndex((item) => item.id === Number(postId));
    if (index !== -1) {
      posts.splice(index, 1);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// update posts
export const PUT = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const { postId } = params;
    const body = await req.json();
    const index = posts.findIndex((item) => item.id === Number(postId));
    if (index !== -1) {
      posts[index] = { ...posts[index], ...body, id: Number(postId) };
      return NextResponse.json(
        { success: true, post: posts[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
