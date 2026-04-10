import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listProducts() {
    const data = await sql`
    SELECT 
      products.name AS product_name,
      products.priceInCents,
      users.name AS seller_name,
      categories.name AS category_name,
      reviews.rating
    FROM products
    JOIN users ON products.seller = users.id
    JOIN categories ON products.category = categories.id
    JOIN reviews ON products.id = reviews.productId
    LIMIT 10;
  `;

    return data;
}

export async function GET() {
    try {
        return Response.json(await listProducts());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}