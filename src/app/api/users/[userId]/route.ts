import { NextRequest, NextResponse } from "next/server";
import users from "@/data/users.json";

// get users by id
export const GET = (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;
    const res = users.find((item) => item.id === Number(userId));
    return NextResponse.json({ users: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete user
export const DELETE = (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;
    const index = users.findIndex((item) => item.id === Number(userId));

    if (index !== -1) {
      users.splice(index, 1);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// update user
export const PUT = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const { userId } = params;
    const body = await req.json();
    const index = users.findIndex((item) => item.id === Number(userId));

    if (index !== -1) {
      users[index] = { ...users[index], ...body, id: Number(userId) };
      return NextResponse.json(
        { success: true, user: users[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
