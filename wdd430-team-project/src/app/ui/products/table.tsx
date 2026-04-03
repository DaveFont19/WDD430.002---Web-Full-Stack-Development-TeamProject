import Link from "next/link";
import Image from "next/image";

import { devListProducts } from "../../query/route";

export default async function Table(
    {
        query,
        currentPage
    }: {
        query: string;
        currentPage: number;
    }) {
    const products = await devListProducts();
    //const products = await fetchFilteredProducts(query, currentPage);

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
