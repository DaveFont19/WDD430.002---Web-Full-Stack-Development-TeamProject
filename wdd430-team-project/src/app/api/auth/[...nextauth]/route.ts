import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const authOptions = {        
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const users = await sql`
                    SELECT * FROM users WHERE email = ${credentials.email};
                `;

                if (users.length === 0) return null;

                const user = users[0];

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isValid) return null;

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    type: user.type,
                };
            },
        }),
    ],
    session: { strategy: "jwt" as const}, 
};

const handler = NextAuth(authOptions);      
export { handler as GET, handler as POST };