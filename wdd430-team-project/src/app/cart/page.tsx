import Image from "next/image";
import { ptSans } from "../ui/fonts";
import ProductList from "./product-list";

export default function Page() {
    return (
        <div className={ptSans.className} >
            <div id="heading-products">
                <h2>Cart</h2>
                <h3>Price</h3>
                <h3>Quantity</h3>
            </div>
            <ProductList />
        </div>
    );
}