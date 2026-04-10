"use client";

import Image from "next/image";
import { useState, useTransition, useEffect } from "react";

export default function ProductList({ products: initialProducts }: { products: any[] | null }) {
  const [products, setProducts] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (initialProducts) {
      setProducts(initialProducts);
    }
  }, [initialProducts]);

  if (!initialProducts) return <p>Cargando...</p>;
  if (products.length === 0) return <p>Tu carrito está vacío.</p>;

  const total = products.reduce((sum, p) => sum + p.priceincents * p.quantity, 0);

  const handleQuantityChange = (index: number, delta: number) => {
    const product = products[index];
    const newQuantity = product.quantity + delta;

    if (newQuantity < 1) return;

    setProducts((prev) =>
      prev.map((p, i) => (i === index ? { ...p, quantity: newQuantity } : p))
    );

    startTransition(async () => {
      await fetch("/api/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.product_id, quantity: newQuantity }),
      });
    });
  };

  const handleRemove = (index: number) => {
    const product = products[index];

    setProducts((prev) => prev.filter((_, i) => i !== index));

    startTransition(async () => {
      await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.product_id }),
      });
    });
  };

  return (
    <>
      <div id="products-list">
        {products.map((product, index) => (
          <div key={product.product_id} className="product-item">
            <Image
              id="image-product-list"
              src={product.thumbnail.replace("/products", "")}
              width={100}
              height={100}
              alt={product.product_name}
            />
            <p className="product-description">{product.product_name}</p>
            <p>${(product.priceincents / 100).toFixed(2)}</p>

            <div id="quantity-control">
              <button
                type="button"
                id="minus"
                onClick={() => handleQuantityChange(index, -1)}
                disabled={isPending || product.quantity <= 1}
              >
                <Image
                  src="/remove_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Minus"
                  width={20}
                  height={20}
                />
              </button>

              <p>{product.quantity}</p>

              <button
                type="button"
                id="plus"
                onClick={() => handleQuantityChange(index, +1)}
                disabled={isPending}
              >
                <Image
                  src="/add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Plus"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <button onClick={() => handleRemove(index)} disabled={isPending}>
              <Image src="/delete.png" alt="Delete" width={20} height={20} />
            </button>
          </div>
        ))}
      </div>

      <div id="total-section">
        <h3>Total ${(total / 100).toFixed(2)}</h3>
        <button type="button" disabled={isPending}>
          {isPending ? "Actualizando..." : "Buy Now"}
        </button>
      </div>
    </>
  );
}