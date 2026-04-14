/*
import postgres from "postgres";
import { z } from "zod";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    try {
        const product = await sql`
      SELECT *
      FROM products
      WHERE id = ${id}
    `;

        if (product.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(product[0]);
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return Response.json(
            { error: "Failed to fetch product" },
            { status: 500 }
        );
    }
}

const UpdateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string().optional(),
    priceincents: z.coerce.number().optional(),
    category: z.string().optional(),
    seller: z.string().optional(),
    rating: z.coerce.number().optional()
});

export async function PATCH(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const body = await req.json();
        const parsed = UpdateProductSchema.parse(body);

        if (Object.keys(parsed).length === 0) {
            return Response.json(
                { error: "No valid fields provided for update" },
                { status: 400 }
            );
        }

        const fields = Object.keys(parsed);
        const values = Object.values(parsed);

        // Build a safe SQL SET clause using sql.unsafe
        const setClause = sql.unsafe(
            fields
                .map((field, i) => `${field} = ${sql`${values[i]}`}`)
                .join(", ")
        );

        const updated = await sql`
            UPDATE products
            SET ${setClause}
            WHERE id = ${id}
            RETURNING *
        `;

        if (updated.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(updated[0]);
    } catch (error) {
        console.error("Failed to update product:", error);

        if (error instanceof z.ZodError) {
            return Response.json(
                { error: "Invalid input", details: error.issues },
                { status: 400 }
            );
        }

        return Response.json(
            { error: "Failed to update product" },
            { status: 500 }
        );
    }
}




export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    try {
        const deleted = await sql`
      DELETE FROM products
      WHERE id = ${id}
      RETURNING *
    `;

        if (deleted.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(
            { message: "Product deleted successfully" }
        );
    } catch (error) {
        console.error("Failed to delete product:", error);
        return Response.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}
    */

import postgres from "postgres";
import { z } from "zod";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        if (id === undefined) {
            return Response.json({ error: "Invalid ID" }, { status: 400 });
        }

        const product = await sql`
            SELECT *
            FROM products
            WHERE id = ${id}
        `;

        if (product.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(product[0]);
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return Response.json(
            { error: "Failed to fetch product" },
            { status: 500 }
        );
    }
}

const UpdateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string().optional(),
    priceincents: z.coerce.number().optional(),
    category: z.string().optional(),
    seller: z.string().optional(),
    rating: z.coerce.number().optional()
});

export async function PATCH(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        if (id === undefined) {
            return Response.json({ error: "Invalid ID" }, { status: 400 });
        }

        const body = await req.json();
        const parsed = UpdateProductSchema.parse(body);

        // Remove undefined values
        const entries = Object.entries(parsed).filter(
            ([_, value]) => value !== undefined
        );

        if (entries.length === 0) {
            return Response.json(
                { error: "No valid fields provided for update" },
                { status: 400 }
            );
        }

        // Build SET clause using postgres.js safe fragments
        const setFragments = entries.map(([field, value]) => {
            return sql`${sql(field)} = ${value}`;
        });

        // Combine fragments into a single SQL fragment
        const setClause = setFragments.reduce((acc, fragment, i) => {
            return i === 0 ? fragment : sql`${acc}, ${fragment}`;
        });

        const updated = await sql`
            UPDATE products
            SET ${setClause}
            WHERE id = ${id}
            RETURNING *
        `;

        if (updated.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json(updated[0]);
    } catch (error) {
        console.error("Failed to update product:", error);

        if (error instanceof z.ZodError) {
            return Response.json(
                { error: "Invalid input", details: error.issues },
                { status: 400 }
            );
        }

        return Response.json(
            { error: "Failed to update product" },
            { status: 500 }
        );
    }
}


export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        if (id === undefined) {
            return Response.json({ error: "Invalid ID" }, { status: 400 });
        }

        const deleted = await sql`
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *
        `;

        if (deleted.length === 0) {
            return Response.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return Response.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Failed to delete product:", error);
        return Response.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}
