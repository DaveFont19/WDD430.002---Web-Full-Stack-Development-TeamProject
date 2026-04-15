"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function WishlistButton({
  userId,
  productId,
}: {
  userId: string | null;
  productId: string;
}) {
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const checkWishlist = async () => {
      try {
        const response = await fetch(
          `/api/wishlist/${userId}?productId=${productId}`,
        );
        const data = await response.json();
        setInWishlist(data.inWishlist);
      } catch (error) {
        console.error("Error checking wishlist:", error);
      }
    };

    checkWishlist();
  }, [userId, productId]);

  const handleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!userId) {
      alert("You must be logged in to add items to your wishlist.");
      return;
    }

    setLoading(true);

    try {
      const method = inWishlist ? "DELETE" : "POST";

      const response = await fetch(`/api/wishlist/${userId}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) throw new Error("Failed to update wishlist");

      setInWishlist((prev) => !prev);
    } catch (error) {
      console.error(error);
      alert("Failed to update wishlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleWishlist}
      disabled={loading}
      className={`transition-opacity ${loading ? "opacity-50" : "opacity-100"}`}
      title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Image
        src={
          inWishlist
            ? "/my-wish-list.png"
            : "/pngtree-love-interface-line-vector-single-icon-image_319675.jpg"
        }
        className="rounded-full cursor-pointer"
        alt={inWishlist ? "In wishlist" : "Add to wishlist"}
        width={24}
        height={24}
      />
    </button>
  );
}
