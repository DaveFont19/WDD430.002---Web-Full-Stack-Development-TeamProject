
import postgres from 'postgres';
import RatingStars from './rating-stars';
import styles from './review-list.module.css';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default async function ReviewList({ productId }: { productId: string }) {
    const reviews = await sql`
    SELECT r.id, r.rating, r.comment, r.createdAt, u.name
    FROM reviews r
    LEFT JOIN users u ON u.id = r.userId
    WHERE r.productId = ${productId}
    ORDER BY r.createdAt DESC
  `;

    if (reviews.length === 0) {
        return <p>No reviews yet.</p>;
    }

    return (
        <div className={styles.container}>
            <h3>Reviews</h3>

            {reviews.map((review: any) => (
                <div
                    key={review.id}
                    className={styles.review}
                >
                    <div>
                        <RatingStars value={review.rating} />
                    </div>

                    <p>{review.comment}</p>

                    <small>
                        {review.name || 'Anonymous'} •{' '}
                        {new Date(review.createdat).toLocaleDateString()}
                    </small>
                </div>
            ))}
        </div>
    );
}