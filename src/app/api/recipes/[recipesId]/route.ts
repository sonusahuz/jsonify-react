import { NextRequest, NextResponse } from "next/server";
import recipes from "@/data/recipes.json";

// get single recipe
export const GET = (
  req: NextRequest,
  { params }: { params: { recipesId: string } }
) => {
  try {
    const { recipesId } = params;
    const res = recipes.find((item) => item.id === Number(recipesId));
    return NextResponse.json({ recipes: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete recipes
export const DELETE = (
  req: NextRequest,
  { params }: { params: { recipesId: string } }
) => {
  try {
    const { recipesId } = params;
    const index = recipes.findIndex((item) => item.id === Number(recipesId));

    if (index !== -1) {
      recipes.splice(index, 1);
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
  { params }: { params: { recipesId: string } }
) => {
  try {
    const { recipesId } = params;
    const body = await req.json();
    const index = recipes.findIndex((item) => item.id === Number(recipesId));

    if (index !== -1) {
      recipes[index] = { ...recipes[index], ...body, id: Number(recipesId) };
      return NextResponse.json(
        { success: true, recipe: recipes[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
