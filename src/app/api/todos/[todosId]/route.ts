import { NextRequest, NextResponse } from "next/server";
import todos from "@/data/todos.json";

// get todos by id
export const GET = (
  req: NextRequest,
  { params }: { params: { todosId: string } }
) => {
  try {
    const { todosId } = params;
    const res = todos.find((item) => item.id === Number(todosId));
    return NextResponse.json({ todos: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete todos
export const DELETE = (
  req: NextRequest,
  { params }: { params: { todosId: string } }
) => {
  try {
    const { todosId } = params;
    const index = todos.findIndex((item) => item.id === Number(todosId));

    if (index !== -1) {
      todos.splice(index, 1);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// update recipes
export const PUT = async (
  req: NextRequest,
  { params }: { params: { todosId: string } }
) => {
  try {
    const { todosId } = params;
    const body = await req.json();
    const index = todos.findIndex((item) => item.id === Number(todosId));

    if (index !== -1) {
      todos[index] = { ...todos[index], ...body, id: Number(todosId) };
      return NextResponse.json(
        { success: true, todo: todos[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
