import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function listProducts() {
    const data = await sql`
    SELECT 
      p.id as id,
	    p.name as name,
	    p.description description,
	    p.image as image,
	    p.thumbnail as thumbnail,
	    p.priceincents as priceInCents,
	    c.name as category_name,
	    u.name as user_name,
	    p.rating as rating
    FROM products p
    JOIN users u ON p.seller = u.id
    JOIN categories c ON p.category = c.id
    LIMIT 10;
  `;

    return data;
}

export async function listFeaturedProducts() {
    const data = await sql`
    SELECT 
      p.id as id,
	    p.name as name,
	    p.description description,
	    p.image as image,
	    p.thumbnail as thumbnail,
	    p.priceincents as priceInCents,
	    c.name as category_name,
	    u.name as user_name,
	    p.rating as rating
    FROM products p
    JOIN users u ON p.seller = u.id
    JOIN categories c ON p.category = c.id
    WHERE p.rating > 4
    ORDER BY RANDOM()
    LIMIT 5;
  `;

    return data;
}

export async function GET() {
    try {
        return Response.json(await listProducts());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

const ITEMS_PER_PAGE = Number(process.env.ITEMS_PER_PAGE) || 10;

export async function fetchProductSearchPages(query: string) {
	try {
        const data = await sql`SELECT COUNT(*)
		FROM products
        JOIN users ON products.seller = users.id
        JOIN categories on products.category = categories.id
        WHERE
            products.name ILIKE ${`%${query}%`} OR
            products.description ILIKE ${`%${query}%`} OR
            products.priceInCents::text ILIKE ${`%${query}%`} OR
            categories.name ILIKE ${`%${query}%`} OR
            products.rating::text ILIKE ${`%${query}%`} OR
            users.name ILIKE ${`%${query}%`}
      `;
        
        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error(`Database error: ${error}`);
        throw new Error('Failed to fetch total number of pages in product search.');
    }
}

export async function listFilteredProducts(
    query: string,
    currentPage: number
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = await sql`
    SELECT 
      p.id as id,
	    p.name as name,
	    p.description description,
	    p.image as image,
	    p.thumbnail as thumbnail,
	    p.priceincents as "priceInCents",
	    c.name as category_name,
	    u.name as user_name,
	    p.rating as rating
    FROM products p
    JOIN users u ON p.seller = u.id
    JOIN categories c ON p.category = c.id
    WHERE
        p.name ILIKE ${`%${query}%`} OR
        p.description ILIKE ${`%${query}%`} OR
        p.priceInCents::text ILIKE ${`%${query}%`} OR
        c.name ILIKE ${`%${query}%`} OR
        p.rating::text ILIKE ${`%${query}%`} OR
        u.name ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
  `;

    return data;
}

export async function getProductById(
    id: string
) {
    try {
        const data = await sql`
    SELECT 
      p.id as id,
	    p.name as name,
	    p.description description,
	    p.image as image,
	    p.thumbnail as thumbnail,
	    p.priceincents as "priceInCents",
	    c.name as category_name,
	    u.name as user_name,
	    p.rating as rating
    FROM products p
    JOIN users u ON p.seller = u.id
    JOIN categories c ON p.category = c.id
    WHERE
        p.id = ${`${id}`};
  `;

        return data[0];
    }
    catch (error) {
        console.error(`Database error: ${error}`);
        throw new Error(`Failed to fetch product with id: ${id}`);
    }
}

export async function getProductByUserIdForProfile(
    id: string
) {
    try {
        const data = await sql`
    SELECT 
      p.id as id,
	    p.name as name,
	    (p.priceincents / 100) as "price",
	    1 as "stock",
	    p.thumbnail as thumbnail
    FROM products p
    WHERE
        p.seller = ${`${id}`};
  `;

        return data;
    }
    catch (error) {
        console.error(`Database error: ${error}`);
        throw new Error(`Failed to fetch product with id: ${id}`);
    }
}