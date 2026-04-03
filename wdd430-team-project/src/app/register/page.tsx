import { Suspense } from 'react';
import { Metadata } from 'next';
import RegisterForm from "../ui/register-form";

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div>
                <div>
                </div>
                <Suspense>
                    <RegisterForm />
                </Suspense>
            </div>
        </main>
    );
}