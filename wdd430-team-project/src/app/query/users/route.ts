import bcrypt from 'bcryptjs';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listUsers() {
    const data = await sql`
    SELECT *
    FROM users;
  `;

    return data;
}

async function createUser(name: string, email: string, password: string, type: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await sql`
    INSERT INTO users (name, email, password, type)
    VALUES (${name}, ${email}, ${hashedPassword}, ${type.toLowerCase()})
    RETURNING *;
  `;

    return data[0];
}

export async function GET() {
    try {
        return Response.json(await listUsers());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password, type } = body;

        if (!name || !email || !password || !type) {
            return Response.json(
                { error: "Missing required fields: name, email, password, type" },
                { status: 400 }
            );
        }

        const newUser = await createUser(name, email, password, type);
        return Response.json(newUser, { status: 201 });
    } catch (error: any) {
        //error code 23505 is for duplicate emails
        if (error.code === "23505") {
            return Response.json(
                { error: "Email already exists. Please use a different email." },
                { status: 409 }
            );
        }

        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
