import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                // Look up user by email
                const users = await sql`
          SELECT *
          FROM users
          WHERE email = ${credentials.email};
        `;

                if (users.length === 0) return null;

                const user = users[0];

                // Compare password with bcrypt
                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isValid) return null;

                // Return user object for session
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    type: user.type,
                };
            },
        }),
    ],
    session: { strategy: "jwt" },
});

export { handler as GET, handler as POST };

