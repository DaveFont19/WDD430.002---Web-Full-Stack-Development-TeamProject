import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"
import "@/app/ui/featured-products.css"

// foreach item create Link

export default async function FeatureProducts() {
  // Get products from database

  // TEST: This is sample data that will need to be fetched from the database
  const products = [
    {
      id: "7728efb3-f98c-4cc3-87c1-1d73905cc156",
      name: "Fiery Walker",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "1bbe38ac-8c47-41b1-8659-9be762e728a4",
      name: "Astronomic Pitcher",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "bcc3132c-d54a-440b-b86f-2e1da7634b43",
      name: "Fancy Swimmer",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "b2678bc8-be5c-49dd-93eb-0515e69364d0",
      name: "Slow Dancer",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "bfc02015-a214-4f24-9484-7b9b0cc9e7f4",
      name: "Bright teacher",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
  ];

  return (
    <div className="bounding-box">
      <ul id="featured-product-list">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="featured-product-link"
            >
              <Image
                src={product.thumbnail}
                alt={`Thumbnail image for the ${product.name}`}
                width={300}
                height={300}
                className="featured-product-image"
				  />
				  <p>
					  {product.name}
				  </p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
