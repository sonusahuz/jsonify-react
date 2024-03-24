import { NextRequest, NextResponse } from "next/server";
import recipes from "@/data/recipes.json";

// get all recipes
export const GET = (req: NextRequest, res: NextResponse) => {
  try {
    const limitQuery = req.nextUrl.searchParams.get("limit");
    const skipQuery = req.nextUrl.searchParams.get("skip");

    let resultRecipes = [...recipes];

    // Applying skip
    if (skipQuery) {
      const skip = Number(skipQuery);
      resultRecipes = resultRecipes.slice(skip);
    }

    // Applying limit
    if (limitQuery) {
      const limit = Number(limitQuery);
      resultRecipes = resultRecipes.slice(0, limit);
    }

    return NextResponse.json({ recipes: resultRecipes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// create recipes
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const id = recipes.length + 1;

    const newRecipes = { id, ...body };
    recipes.push(newRecipes);
    return NextResponse.json({ recipes: newRecipes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
