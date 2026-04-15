import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/profile.module.css";
import "@/app/ui/products/featured-products.css";
import DeleteButton from "@/app/ui/delete-button";
import { getProductByUserIdForProfile } from "../query/route";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    thumbnail: string;
}

interface ArtisanProfile {
    name: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    profilePicture: string;
    products: Product[];
}


async function getArtisanData(): Promise<ArtisanProfile> {

    const product_list = await getProductByUserIdForProfile("55555555-5555-5555-5555-555555555555");
    
    const products: Product[] = product_list.map((item) => ({
        id: item.id as string,
        name: item.name as string,
        price: Number(item.price),
        stock: Number(item.stock),
        thumbnail: item.thumbnail as string,
    }));
    
    return {
        name: "Daniel Wilson",
        bio: "Artizan artizan artizan, from Uruguay, specialist in wood",
        email: "test@test.com",
        phone: "1555 012-3456",
        location: "Rivera, Uruguay",
        profilePicture: "/sellers/profile-placeholder.svg",
        products: products
    };
}

export default async function ProfilePage() {
    const profile = await getArtisanData();

    return (
        <div className={styles.profileWrapper}>
            <section className={styles.headerContainer}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Image
                        src={profile.profilePicture}
                        alt={profile.name}
                        width={120}
                        height={120}
                        className={styles.avatar}
                    />
                    <div className={styles.infoContent}>
                        <h1>{profile.name}</h1>
                        <p className={styles.bio}>{profile.bio}</p>
                        <div className={styles.contactInfo}>
                            <span><strong>Email:</strong> {profile.email}</span>
                            <span><strong>Phone:</strong> {profile.phone}</span>
                        </div>
                    </div>
                </div>

                <Link
                    href="/profile/add-product"
                    className="featured-product-link"
                    style={{
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        display: 'inline-block'
                    }}
                >
                    Add New Product
                </Link>
            </section>

            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '40px 0' }} />

            <h2 style={{ marginBottom: '24px' }}>My Active Products</h2>

            <ul id="featured-product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: 0 }}>
                {profile.products.map((product) => (
                    <li key={product.id} className="featured-product-link">
                        
                        <Link 
                            href={`/products/${product.id}`} 
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Image
                                src={product.thumbnail}
                                alt={product.name}
                                width={250}
                                height={250}
                                className="featured-product-image"
                                style={{ borderRadius: '8px', cursor: 'pointer' }}
                            />
                            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{product.name}</p>
                        </Link>

                        <p style={{ fontSize: '1.1rem', marginTop: '5px', color: 'hsl(215, 29%, 19%)' }}>
                            ${product.price.toFixed(2)}
                        </p>

                        <div style={{ display: 'flex', gap: '8px', marginTop: '15px', width: '100%' }}>
                            <Link
                                href={`/profile/edit-product/${product.id}`}
                                style={{
                                    flex: 1,
                                    padding: '8px',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    border: '1px solid #232f40',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Edit
                            </Link>
                            <DeleteButton id={product.id} name={product.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}