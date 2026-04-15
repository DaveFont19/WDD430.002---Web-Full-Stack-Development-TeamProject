import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { listFilteredProducts } from "../../query/route";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import WishlistButton from "./wishlist-button";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await listFilteredProducts(query, currentPage);

  const session = await getServerSession(authOptions);
  let userId = null;

  if (session?.user?.email) {
    const users = await sql`
            SELECT id FROM users WHERE email = ${session.user.email}
        `;
    userId = users[0]?.id ?? null;
  }

  return (
    <div className="bounding-box">
      <ul id="featured-product-list">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="featured-product-link flex flex-col justify-between"
            >
              <Image
                src={product.thumbnail}
                alt={`Thumbnail image for the ${product.name}`}
                width={300}
                height={300}
                className="featured-product-image max-h-[300px] max-w-[300px]"
              />
              <div>
                <p>{product.name}</p>
                <div className="flex justify-between">
                  <div>{product.user_name}</div>
                  <div>
                    {(product.priceInCents / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                  <div className="flex">
                    <StarIcon className="text-yellow-400 w-4" />
                    {product.rating}
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <WishlistButton userId={userId} productId={product.id} />
                <Image
                  src="/24-241097_bag-cart-icon-font-awesome.png"
                  className="rounded-full"
                  alt="cart"
                  width={28}
                  height={24}
                />
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
