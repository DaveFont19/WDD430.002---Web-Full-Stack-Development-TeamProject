'use server';

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createReview(prevState: any, formData: FormData) {
    const productId = formData.get('productId') as string;
    const userId = formData.get('userId') as string;
    const rating = Number(formData.get('rating'));
    const comment = formData.get('comment') as string;

    try {
        await sql`
      INSERT INTO reviews (productId, userId, rating, comment)
      VALUES (${productId}, ${userId}, ${rating}, ${comment})
    `;

        await sql`
        UPDATE products
        SET rating = (
            SELECT COALESCE(AVG(r.rating), 0)
            FROM reviews r
            WHERE r.productId = ${productId}
        )
        WHERE id = ${productId}
        `;

        return { success: true };
    } catch (error) {
        return { error: 'Failed to create review' };
    }
}