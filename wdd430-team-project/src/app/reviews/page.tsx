import ReviewList from '@/app/ui/review-list';
import ReviewForm from '@/app/ui/review-form';
import RatingStars from '../ui/rating-stars';

export default function Reviews() {
    const productId = '10000001-0000-0000-0000-000000000001';
    const userId = '22222222-2222-2222-2222-222222222222';

    return (
        <div>
            <h2>Average Rating</h2>
            <RatingStars value={4.2} />
            <p>4.2 / 5</p>
            <ReviewList productId={productId} />
            <ReviewForm productId={productId} userId={userId} />
        </div>
    );
}