import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listProducts() {
    const data = await sql`
    SELECT 
      products.name AS product_name,
      products.priceInCents,
      users.name AS seller_name,
      categories.name AS category_name
    FROM products
    JOIN users ON products.seller = users.id
    JOIN categories ON products.category = categories.id
    LIMIT 10;
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


export async function devListProducts()
{
	return [
    {
      id: "7728efb3-f98c-4cc3-87c1-1d73905cc156",
      name: "Fiery Walker",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "1bbe38ac-8c47-41b1-8659-9be762e728a4",
      name: "Astronomic Pitcher",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "bcc3132c-d54a-440b-b86f-2e1da7634b43",
      name: "Fancy Swimmer",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "b2678bc8-be5c-49dd-93eb-0515e69364d0",
      name: "Slow Dancer",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
    {
      id: "bfc02015-a214-4f24-9484-7b9b0cc9e7f4",
      name: "Bright teacher",
      thumbnail: "product_thumbnail_placeholder.svg",
      image: "",
      priceInCents: 0,
      seller: "0c26ed8e-ad80-4b4f-be7e-6a9710773485",
    },
  ];
}

const ITEMS_PER_PAGE = Number(process.env.ITEMS_PER_PAGE) || 20;

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
            category.name ILIKE ${`%${query}%`} OR
            product.rating ILIKE ${`%${query}%`} OR
            user.firstname ILIKE ${`%${query}%`} OR
            user.lastname ILIKE ${`%${query}%`}
      `;
        
        const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error(`Database error: ${error}`);
        throw new Error('Failed to fetch total number of pages in product search.');
    }
}

export async function devFetchProductSearchPages() {
    const products = await devListProducts();
    const totalPages = Math.ceil(Number(products.length) / ITEMS_PER_PAGE);
    return totalPages;
}