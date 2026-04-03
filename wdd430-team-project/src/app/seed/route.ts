import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { users, products, categories, carts } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      type TEXT NOT NULL
    );
  `;

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await sql`
        INSERT INTO users (id, name, email, password, type)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.type})
        ON CONFLICT (id) DO NOTHING;
      `;
  }
}

async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  for (const category of categories) {
    await sql`
        INSERT INTO categories (id, name)
        VALUES (${category.id}, ${category.name})
        ON CONFLICT (id) DO NOTHING;
      `;
  }
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      image TEXT,
      thumbnail TEXT,
      priceInCents INTEGER NOT NULL,
      category UUID REFERENCES categories(id),
      seller UUID REFERENCES users(id),
      rating INTEGER
    );
  `;

  for (const product of products) {
    await sql`
        INSERT INTO products (id, name, description, image, thumbnail, priceInCents, category, seller, rating)
        VALUES (${product.id}, ${product.name}, ${product.description}, ${product.image}, ${product.thumbnail}, ${product.priceInCents}, ${product.category}, ${product.seller}, ${product.rating})
        ON CONFLICT (id) DO NOTHING;
      `;
  }
}

async function seedCarts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS carts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      userId UUID REFERENCES users(id),
      productId UUID REFERENCES products(id),
      quantity INTEGER NOT NULL
    );
  `;

  for (const cart of carts) {
    for (const item of cart.products) {
      await sql`
        INSERT INTO carts (id, userId, productId, quantity)
        VALUES (${cart.id}, ${cart.userId}, ${item.productId}, ${item.quantity})
        ON CONFLICT DO NOTHING;
      `;
    }
  }
}


export async function GET() {
    try {
        await seedUsers();
        await seedCategories();
        await seedProducts();
        await seedCarts();

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}