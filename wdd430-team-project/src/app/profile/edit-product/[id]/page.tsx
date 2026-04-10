import EditProductForm from "@/app/ui/edit-form";
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// this will came from db
async function getProductById(id: string) {
    const products = [
        { 
            id: "1", 
            name: "Hand-Thrown Ceramic Mug", 
            price: 25.00, 
            stock: 15, 
            description: "A beautiful handmade mug for your morning coffee or tea.",
            thumbnail: "/product_thumbnail_placeholder.svg"
        },
        
    ];
    return products.find(p => p.id === id);
}

export default async function EditPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const product = await getProductById(id);

    if (!product) {
        notFound(); 
    }

    return (
        <main className="flex items-center justify-center md:h-screen">
            <Suspense fallback={<p>Loading product data...</p>}>
                <EditProductForm product={product} />
            </Suspense>
        </main>
    );
}