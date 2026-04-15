import postgres from 'postgres';
import bcrypt from 'bcryptjs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET(
    req: Request,
    context: { params: { id: string } }
) {
    const { id } = await context.params;

    const user = await sql`
    SELECT *
    FROM users
    WHERE id = ${id};
  `;

    if (user.length === 0) {
        return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json(user[0]);
}


export async function PUT(
    req: Request,
    context: { params: { id: string } }
) {
    try {
        const { id } = await context.params;
        const body = await req.json();
        const { name, email, password, type } = body;

        if (!name || !email || !password || !type) {
            return Response.json(
                { error: "Missing required fields: name, email, password, type" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const updated = await sql`
      UPDATE users
      SET 
        name = ${name},
        email = ${email},
        password = ${hashedPassword},
        type = ${type}
      WHERE id = ${id}
      RETURNING *;
    `;

        if (updated.length === 0) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json(updated[0]);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}


export async function DELETE(
    req: Request,
    context: { params: { id: string } }
) {
    try {
        const { id } = await context.params;

        const deleted = await sql`
      DELETE FROM users
      WHERE id = ${id}
      RETURNING *;
    `;

        if (deleted.length === 0) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}