import { ptSans } from "../ui/fonts";
import ProductListWishlist from "./product-list-wishlist";



export default async function Page() {

    return (
        <div className={ptSans.className} >
            <div id="heading-products">
                <h2>Wishlist</h2>
                <h3>Price</h3>
            </div>
            <ProductListWishlist/>
        </div>
    );
}