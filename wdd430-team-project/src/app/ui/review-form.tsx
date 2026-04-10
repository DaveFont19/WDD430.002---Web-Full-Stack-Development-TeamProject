
'use client';

import { useActionState, useState } from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createReview } from '@/app/lib/actions';
import RatingStars from './rating-stars';
import styles from './review-form.module.css';

export default function ReviewForm({
    productId,
    userId,
}: {
    productId: string;
    userId: string;
}) {
    const [state, formAction, isPending] = useActionState(createReview, null);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [rating, setRating] = useState(5);

    
    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset();      
            router.refresh();             
        }
    }, [state, router]);

    return (
        <form ref={formRef} action={formAction} className={styles.form}>
            <h3>Leave a Review</h3>

            {/* hidden */}
            <input type="hidden" name="productId" value={productId} />
            <input type="hidden" name="userId" value={userId} />

            {/* rating */}
            <label>Rating:</label>
            <RatingStars value={rating} onChange={setRating} />
            <input type="hidden" name="rating" value={rating} />

            {/* comment */}
            <div className={styles.textarea}>
                <label>Comment:</label>
                <textarea
                    name="comment"
                    required
                    rows={4}
                    placeholder="Write your review..."
                />
            </div>

            {/* submit */}
            <button type="submit" disabled={isPending} className={styles.button}>
                {isPending ? 'Submitting...' : 'Submit Review'}
            </button>

            {/* error / success */}
            {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
            {state?.success && <p style={{ color: 'green' }}>Thanks for your review!</p>}
        </form>
    );
}