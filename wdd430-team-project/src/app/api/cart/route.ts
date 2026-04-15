import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });



export async function GET() {
  const userId = "22222222-2222-2222-2222-222222222222";
  try {
    const data = await sql`
      SELECT 
        products.id AS product_id,
        products.name AS product_name,
        products.priceincents,
        products.thumbnail,
        users.name AS seller_name,
        categories.name AS category_name,
        carts.quantity
      FROM carts
      JOIN products ON carts.productId = products.id
      JOIN users ON products.seller = users.id
      JOIN categories ON products.category = categories.id
      WHERE carts.userId = ${userId};
    `;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch cart products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request, id: string) {
  try {
    const { productId, quantity } = await request.json();
    const userId = id
    await sql`
      INSERT INTO carts (userId, productId, quantity)
      VALUES (${userId}, ${productId}, ${quantity})
      ON CONFLICT (userId, productId) DO UPDATE SET quantity = carts.quantity + EXCLUDED.quantity;
    `;
    return NextResponse.json(
      { message: "Product added to cart" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product to cart" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { productId, quantity } = await request.json();
    const userId = "22222222-2222-2222-2222-222222222222";
    
    await sql`
      UPDATE carts
      SET quantity = ${quantity}
      WHERE userId = ${userId} AND productId = ${productId};
    `;
    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { productId } = await request.json();
    const userId = "22222222-2222-2222-2222-222222222222";
    await sql`
      DELETE FROM carts
      WHERE userId = ${userId} AND productId = ${productId};
    `;
    return NextResponse.json(
      { message: "Product removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove product from cart" },
      { status: 500 }
    );
  }
}