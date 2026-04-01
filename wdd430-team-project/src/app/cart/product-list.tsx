import Image from "next/image";

export default function ProductList() {
    return (
        <>
            <div id="products-list">
                <Image src="/product_thumbnail_placeholder.svg" alt="Product Image" width={100} height={100} />
                <p className="product-description">Product Name</p>
                <p>$1550.10</p>
                <p>1</p>
                <button><Image src="/delete.png" alt="Delete" width={20} height={20} /></button>
            </div>
            <div id="total-section">
                <h3>Total $1550.10</h3>
                <button type="button">Buy Now</button>
            </div>
        </>
    );
}