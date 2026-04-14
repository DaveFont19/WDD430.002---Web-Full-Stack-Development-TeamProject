/*
import postgres from 'postgres';
import { z } from "zod";


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {

    try {
        const products = await sql`
    SELECT *
    FROM products
  `;

        return Response.json(products);
    } catch (error) {
        console.error("Database query failed:", error);
        return Response.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

const ProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string().optional(),
    priceincents: z.number().int().positive("Price must be a positive integer"),
    category: z.string().optional(), //doesn't check database if category ID exists. Could add later
    seller: z.string().optional(), //doesn't check database if seller ID exists. Could add later
    rating: z.number().int().min(1).max(5).optional()
});

export async function POST(req: Request) {
    try {
        const json = await req.json();

        // Validate request body
        const parsed = ProductSchema.safeParse(json);

        if (!parsed.success) {
            return Response.json(
                {
                    error: "Validation failed",
                    issues: parsed.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }

        const data = {
            ...parsed.data,
            description: parsed.data.description ?? null,
            image: parsed.data.image ?? null,
            thumbnail: parsed.data.thumbnail ?? null,
            category: parsed.data.category ?? null,
            seller: parsed.data.seller ?? null,
            rating: parsed.data.rating ?? null,
        };


        const newProduct = await sql`
            INSERT INTO products (
                name,
                description,
                image,
                thumbnail,
                priceincents,
                category,
                seller,
                rating
            )
            VALUES (
                ${data.name},
                ${data.description},
                ${data.image},
                ${data.thumbnail},
                ${data.priceincents},
                ${data.category},
                ${data.seller},
                ${data.rating}
            )
            RETURNING *;
        `;

        return Response.json(newProduct[0], { status: 201 });

    } catch (error) {
        console.error("Failed to create product:", error);
        return Response.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}
    */