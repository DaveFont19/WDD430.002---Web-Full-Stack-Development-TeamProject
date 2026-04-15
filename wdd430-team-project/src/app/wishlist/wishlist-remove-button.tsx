"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WishlistRemoveButton({
  userId,
  productId,
}: {
  userId: string | null;
  productId: string;
  
}) {
  const router = useRouter();

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userId) return;

    try {
      const response = await fetch(`/api/wishlist/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) throw new Error("Failed");
      router.refresh();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleRemove}>
      <Image src="/delete.png" alt="Delete" width={20} height={20} />
    </button>
  );
}