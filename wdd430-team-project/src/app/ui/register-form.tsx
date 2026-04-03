"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./form.module.css";
import Link from "next/link";

export default function RegisterForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        //place holder information to push to the database in the future
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Registration failed");
                return;
            }

            router.push("/login");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="confirmPassword" className={styles.label}>
                    Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    className={styles.input}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className={styles.button}>
                Register
            </button>

            <Link href="/login" className={styles.link}>
                Already have an account? Log in
            </Link>
        </form>
    );
}
