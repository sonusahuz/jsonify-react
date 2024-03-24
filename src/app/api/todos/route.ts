import { NextRequest, NextResponse } from "next/server";
import todos from "@/data/todos.json";

export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultTodos = [...todos];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultTodos = resultTodos.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultTodos = resultTodos.slice(0, limit);
    }

    return NextResponse.json({ todos: resultTodos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = todos.length + 1;

    const newTodos = { id, ...body };
    todos.push(newTodos);
    return NextResponse.json({ todos: newTodos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
