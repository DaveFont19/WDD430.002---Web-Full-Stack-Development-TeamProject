import AddProductForm from "@/app/ui/add-form";
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Add New Product',
};

export default function AddProductPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="w-full">
                <Suspense fallback={<p>Loading...</p>}>
                    <AddProductForm />
                </Suspense>
            </div>
        </main>
    );
}