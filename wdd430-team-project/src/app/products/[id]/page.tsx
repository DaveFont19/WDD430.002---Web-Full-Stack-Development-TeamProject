import Image from "next/image";
import { notFound } from "next/navigation";
import { lora } from "@/app/ui/fonts";
import styles from "@/app/ui/profile.module.css";
import Link from "next/link";
import Reviews from "@/app/reviews/page";

// Just simulation
async function getProduct(id: string) {
  const products = [
    {
      id: "1",
      name: "Ceramic Mug",
      seller: "Martin Sander",
      price: 25.00,
      stock: 15,
      description: "A beautiful handmade mugA beautiful handmade mug A beautiful handmade mug  A beautiful handmade mug A beautiful handmade mug A beautiful handmade mug A beautiful handmade mug A beautiful handmade mug A beautiful handmade mug",
      thumbnail: "/product_thumbnail_placeholder.svg"
    },
    {
      id: "2",
      name: "Hand made little table",
      seller: "Martin Sander",
      price: 45.00,
      stock: 8,
      description: "Hand made little table Hand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little tableHand made little table",
      thumbnail: "/product_thumbnail_placeholder.svg"
    },
    {
      id: "3",
      name: "Bedside lamp",
      seller: "Martin Sander",
      price: 35.00,
      stock: 5,
      description: "Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp Beautiful handmade bedside lamp",
      thumbnail: "/product_thumbnail_placeholder.svg"
    },
  ];

  return products.find(p => p.id === id);
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.profileWrapper} style={{ marginTop: '2rem' }}>

      <Link href="/" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem' }}>
        Back to products
      </Link>

      <main
        style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap'
        }}
      >

        <div style={{
          flex: '1 1 300px', 
          maxWidth: '300px', 
          width: '100%',     
          margin: '0 auto'   
        }}>
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={300}
            height={300}
            priority
            style={{
              borderRadius: '12px',
              objectFit: 'cover',
              border: '1px solid #eee',
              width: '100%',  
              height: 'auto'  
            }}
          />
        </div>


        <div style={{ flex: 1 }}>
          <h1 className={lora.className} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {product.name}
          </h1>

          <p style={{ color: '#555', marginBottom: '1rem' }}>
            Seller: <strong>{product.seller}</strong>
          </p>

          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'hsl(215, 29%, 19%)',
            marginBottom: '1rem'
          }}>
            ${product.price.toFixed(2)}
          </div>

          <p style={{
            padding: '4px 8px',
            backgroundColor: '#f0f0f0',
            display: 'inline-block',
            borderRadius: '4px',
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            Stock available: {product.stock} units
          </p>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Description</h3>
            <p style={{ lineHeight: '1.6', color: '#333' }}>
              {product.description}
            </p>
          </div>

          <Link
            href={`/cart/${product.id}`}
            style={{
              marginTop: '2rem',
              width: '100%',
              maxWidth: '300px',
              padding: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              backgroundColor: '#ffce12',
              borderRadius: '10px',
              marginRight: '10px',
              fontFamily: 'PT Sans, PT Sans Fallback',
              fontSize: '1rem',
            }}
          >
            Add to Cart
          </Link>

          <button
            style={{
              marginTop: '1rem',
              width: '100%',
              maxWidth: '300px',
              padding: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'inline-block',
              textAlign: 'center',
              textDecoration: 'none',
              backgroundColor: '#50bac8',
              borderRadius: '10px',
              marginRight: '10px',
              fontFamily: 'PT Sans, PT Sans Fallback',
              fontSize: '1rem',
            }}
          >
            Add to Whislist
          </button>
        </div>
      </main>

      <section style={{ marginTop: '4rem', borderTop: '2px solid #f5f5f5', paddingTop: '2rem' }}>
        <h2 className={lora.className}>Reviews & Ratings</h2>
        <div style={{
          marginTop: '1rem',
          padding: '2rem',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#888',
          border: '1px dashed #ccc'
        }}>
          <Reviews/>
        </div>
      </section>
    </div>
  );
  
}