import Image from "next/image";
import { getWishlistByUserId, getUserIdByEmail } from "../lib/wishlist-data";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import WishlistRemoveButton from "./wishlist-remove-button";

export default async function ProductListWishlist() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login?");
  }
  const userId = session?.user?.email
  ? await getUserIdByEmail(session.user.email)
  : null;
  const products = await getWishlistByUserId(userId);

  if (products.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div id="products-list">
      {products.map((product) => (
        
        <div key={product.product_id} className="product-item">
          <Image
            id="image-product-list"
            src={product.thumbnail}
            width={100}
            height={100}
            alt={product.product_name}
          />
          <p className="product-description">{product.product_name}</p>
          <p>${(product.priceincents / 100).toFixed(2)}</p>
          <p></p>
          
          <WishlistRemoveButton
            userId={userId}
            productId={product.product_id}
          />
        </div>
      ))}
    </div>
  );
}
