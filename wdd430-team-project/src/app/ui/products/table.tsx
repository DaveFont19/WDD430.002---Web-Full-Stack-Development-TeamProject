import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

import { listFilteredProducts } from "../../query/route";

export default async function Table(
    {
        query,
        currentPage
    }: {
        query: string;
        currentPage: number;
    }) {
    const products = await listFilteredProducts(query, currentPage);
    //const products = await fetchFilteredProducts(query, currentPage);

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
                                    <div>{(product.priceInCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
                                    <div className="flex"><StarIcon className="text-yellow-400 w-4" />{product.rating}</div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
