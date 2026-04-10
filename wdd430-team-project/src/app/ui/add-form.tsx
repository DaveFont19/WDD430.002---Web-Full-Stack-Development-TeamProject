"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./form.module.css"; 
import Link from 'next/link';

export default function AddProductForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        
        if (description.length < 20) {
            setError("The description must be at least 20 characters long.");
            return;
        }

        console.log({ 
            name, 
            description, 
            price: Number(price), 
            stock: Number(stock) 
        });

        router.push("/profile");
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} style={{ maxWidth: '450px' }}>
            <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Add New Product</h2>
            
            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Product Name</label>
                <input
                    id="name"
                    type="text"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="description" className={styles.label}>Description</label>
                <textarea
                    id="description"
                    className={styles.input}
                    style={{ minHeight: '100px', resize: 'vertical', fontFamily: 'inherit' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="add a description of your product"
                />
                <small style={{ 
                    fontSize: '0.75rem', 
                    color: description.length < 20 ? '#d32f2f' : '#2e7d32',
                    textAlign: 'right'
                }}>
                    {description.length}/20 characters
                </small>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <div className={styles.field} style={{ flex: 1 }}>
                    <label htmlFor="price" className={styles.label}>Price (USD)</label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        className={styles.input}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.field} style={{ flex: 1 }}>
                    <label htmlFor="stock" className={styles.label}>Stock</label>
                    <input
                        id="stock"
                        type="number"
                        className={styles.input}
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
            </div>

            <button type="submit" className={styles.button} style={{ marginTop: '1rem' }}>
                Save Product
            </button>

            <Link href="/profile" className={styles.link} style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                Cancel
            </Link>
        </form>
    );
}