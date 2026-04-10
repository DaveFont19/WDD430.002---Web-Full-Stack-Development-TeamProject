'use client';
import styles from './rating-starts.module.css';

type Props = {
    value: number;
    onChange?: (value: number) => void;
};

export default function RatingStars({ value, onChange }: Props) {
    return (
        <div className={styles.container}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => onChange && onChange(star)}
                    className={`${styles.star} ${star <= value ? styles.filled : ''
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}