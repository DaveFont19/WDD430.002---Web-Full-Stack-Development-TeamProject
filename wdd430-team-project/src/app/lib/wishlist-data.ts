import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
  prepare: false,
});

export async function getWishlistByUserId(userId: string) {
  const data = await sql`
    SELECT
      p.id AS product_id,
      p.name AS product_name,
      p.priceincents,
      p.thumbnail
    FROM wishlist w
    JOIN products p ON w.productid = p.id
    WHERE w.userid = ${userId};
  `;

  return data;
}

export async function getUserIdByEmail(email: string) {
  try {
    const data = await sql`
      SELECT id
      FROM users
      WHERE email = ${email}
      LIMIT 1;
    `;

    return data[0]?.id ?? null;
  } catch (error) {
    console.error("Error getting userId:", error);
    return null;
  }
}