import { NextRequest, NextResponse } from "next/server";
import users from "@/data/users.json";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultUser = [...users];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultUser = resultUser.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultUser = resultUser.slice(0, limit);
    }

    return NextResponse.json({ users: resultUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = users.length + 1;

    const newUser = {
      id,
      ...body,
    };
    users.push(newUser);
    return NextResponse.json({ users: newUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
