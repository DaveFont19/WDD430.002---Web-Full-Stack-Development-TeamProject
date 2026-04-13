import Link from "next/link";
import Image from "next/image";
import "@/app/ui/products/featured-products.css";
import { listFeaturedProducts } from "@/app/query/route";

// foreach item create Link

export default async function FeatureProducts() {
  // Get products from database

  // TEST: This is sample data that will need to be fetched from the database
  const products = await listFeaturedProducts();

  return (
    <div className="bounding-box">
      <ul id="featured-product-list">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="featured-product-link"
            >
              <Image
                src={product.thumbnail}
                alt={`Thumbnail image for the ${product.name}`}
                width={300}
                height={300}
                className="featured-product-image"
              />
              <p>{product.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
