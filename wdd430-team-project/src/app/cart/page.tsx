import Image from "next/image";
import { ptSans } from "../ui/fonts";
import ProductList from "./product-list";

async function getCartProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/cart", {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function Page() {
    return (
        <div className={ptSans.className} >
            <div id="heading-products">
                <h2>Cart</h2>
                <h3>Price</h3>
                <h3>Quantity</h3>
            </div>
            <ProductList products={await getCartProducts()} />
        </div>
    );
}