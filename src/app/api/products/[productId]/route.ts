import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

// get products by id
export const GET = (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const { productId } = params;
    const res = products.find((item) => item.id === Number(productId));
    return NextResponse.json({ products: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// delete products
export const DELETE = (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const { productId } = params;
    const index = products.findIndex((item) => item.id === Number(productId));
    if (index !== -1) {
      products.splice(index, 1);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

// update products
export const PUT = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const { productId } = params;
    const body = await req.json();
    const index = products.findIndex((item) => item.id === Number(productId));
    if (index !== -1) {
      products[index] = { ...products[index], ...body, id: Number(productId) };
      return NextResponse.json(
        { success: true, product: products[index] },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
