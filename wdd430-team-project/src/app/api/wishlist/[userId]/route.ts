import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
  prepare: false,
});

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await context.params;
    const productId = req.nextUrl.searchParams.get("productId");

    if (productId) {
      const data = await sql`
        SELECT 1
        FROM wishlist
        WHERE userid = ${userId} AND productid = ${productId}
        LIMIT 1;
      `;

      return NextResponse.json(
        { inWishlist: data.length > 0 },
        { status: 200 }
      );
    }

    const data = await sql`
      SELECT 
        products.id AS product_id,
        products.name AS product_name,
        products.priceincents,
        products.thumbnail,
        users.name AS seller_name,
        categories.name AS category_name
      FROM wishlist
      JOIN products ON wishlist.productid = products.id
      JOIN users ON products.seller = users.id
      JOIN categories ON products.category = categories.id
      WHERE wishlist.userid = ${userId};
    `;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch wishlist data" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await context.params;
    const { productId } = await req.json();

    await sql`
      INSERT INTO wishlist (userid, productid)
      VALUES (${userId}, ${productId})
      ON CONFLICT (userid, productid) DO NOTHING;
    `;

    return NextResponse.json(
      { message: "Product added to wishlist" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to add product to wishlist" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await context.params;
    const { productId } = await req.json();

    await sql`
      DELETE FROM wishlist
      WHERE userid = ${userId} AND productid = ${productId};
    `;

    return NextResponse.json(
      { message: "Product removed from wishlist" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to remove product from wishlist" },
      { status: 500 }
    );
  }
}