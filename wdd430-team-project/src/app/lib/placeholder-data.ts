const users = [
    {
        id: '11111111-1111-1111-1111-111111111111',
        name: 'John Smith',
        email: 'john@example.com',
        password: '123456',
        type: 'customer'
    },
    {
        id: '22222222-2222-2222-2222-222222222222',
        name: 'Sarah Davis',
        email: 'sarah.davis@example.com',
        password: '123456',
        type: 'customer'
    },
    {
        id: '33333333-3333-3333-3333-333333333333',
        name: 'Emily Johnson',
        email: 'emily.johnson@example.com',
        password: '123456',
        type: 'customer'
    },
    {
        id: '44444444-4444-4444-4444-444444444444',
        name: 'Maria Lopez',
        email: 'maria.lopez@example.com',
        password: '123456',
        type: 'customer'
    },
    {
        id: '55555555-5555-5555-5555-555555555555',
        name: 'Daniel Wilson',
        email: 'daniel.wilson@example.com',
        password: '123456',
        type: 'seller'
    },
    {
        id: '66666666-6666-6666-6666-666666666666',
        name: 'Olivia Taylor',
        email: 'olivia.taylor@example.com',
        password: '123456',
        type: 'seller'
    },
    {
        id: '77777777-7777-7777-7777-777777777777',
        name: 'Lee Robinson',
        email: 'lee.robinson@example.com',
        password: '123456',
        type: 'seller'
    },
    {
        id: '88888888-8888-8888-8888-888888888888',
        name: 'Amy Burns',
        email: 'amy.burns@example.com',
        password: '123456',
        type: 'seller'
    }
];

const categories = [
    {
        id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        name: 'Jewelry'
    },
    {
        id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        name: 'Pottery'
    },
    {
        id: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
        name: 'Textiles'
    },
    {
        id: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
        name: 'Home Decor'
    },
    {
        id: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
        name: 'Woodwork'
    },
    {
        id: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        name: 'Art & Prints'
    },
    {
        id: '99999999-9999-9999-9999-999999999999',
        name: 'Candles'
    },
    {
        id: '12121212-1212-1212-1212-121212121212',
        name: 'Leather Goods'
    },
    {
        id: '13131313-1313-1313-1313-131313131313',
        name: 'Stationery'
    },
    {
        id: '14141414-1414-1414-1414-141414141414',
        name: 'Accessories'
    }
];

const products = [
    {
        id: '10000001-0000-0000-0000-000000000001',
        name: 'Ceramic Mug',
        description: 'Handmade ceramic mug.',
        image: '/products/mug.webp',
        thumbnail: '/products/mug-thumb.webp',
        priceInCents: 2500,
        category: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 5
    },
    {
        id: '10000002-0000-0000-0000-000000000002',
        name: 'Woven Scarf',
        description: 'Colorful handmade scarf.',
        image: '/products/scarf.webp',
        thumbnail: '/products/scarf-thumb.webp',
        priceInCents: 1800,
        category: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 4
    },
    {
        id: '10000003-0000-0000-0000-000000000003',
        name: 'Silver Necklace',
        description: 'Elegant necklace.',
        image: '/products/necklace.jpeg',
        thumbnail: '/products/necklace-thumb.webp',
        priceInCents: 3200,
        category: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 5
    },
    {
        id: '10000004-0000-0000-0000-000000000004',
        name: 'Wooden Bowl',
        description: 'Hand-carved bowl.',
        image: '/products/bowl.webp',
        thumbnail: '/products/bowl-thumb.webp',
        priceInCents: 2700,
        category: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 4
    },
    {
        id: '10000005-0000-0000-0000-000000000005',
        name: 'Scented Candle',
        description: 'Relaxing candle.',
        image: '/products/candle.webp',
        thumbnail: '/products/candle-thumb.webp',
        priceInCents: 1500,
        category: '99999999-9999-9999-9999-999999999999',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },

    {
        id: '10000006-0000-0000-0000-000000000006',
        name: 'Leather Wallet',
        description: 'Minimal wallet.',
        image: '/products/wallet.webp',
        thumbnail: '/products/wallet-thumb.webp',
        priceInCents: 3500,
        category: '12121212-1212-1212-1212-121212121212',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 5
    },
    {
        id: '10000007-0000-0000-0000-000000000007',
        name: 'Art Print',
        description: 'Modern wall art.',
        image: '/products/art.webp',
        thumbnail: '/products/art-thumb.webp',
        priceInCents: 2000,
        category: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 4
    },
    {
        id: '10000008-0000-0000-0000-000000000008',
        name: 'Notebook',
        description: 'Eco notebook.',
        image: '/products/notebook.jpg',
        thumbnail: '/products/notebook-thumb.webp',
        priceInCents: 1200,
        category: '13131313-1313-1313-1313-131313131313',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 4
    },
    {
        id: '10000009-0000-0000-0000-000000000009',
        name: 'Bracelet',
        description: 'Handmade bracelet.',
        image: '/products/bracelet.webp',
        thumbnail: '/products/bracelet-thumb.webp',
        priceInCents: 1400,
        category: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },
    {
        id: '10000010-0000-0000-0000-000000000010',
        name: 'Clay Vase',
        description: 'Decorative vase.',
        image: '/products/vase.webp',
        thumbnail: '/products/vase-thumb.webp',
        priceInCents: 2900,
        category: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 5
    },

    {
        id: '10000011-0000-0000-0000-000000000011',
        name: 'Table Runner',
        description: 'Handwoven textile.',
        image: '/products/runner.webp',
        thumbnail: '/products/runner-thumb.webp',
        priceInCents: 2100,
        category: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 4
    },
    {
        id: '10000012-0000-0000-0000-000000000012',
        name: 'Wall Decor',
        description: 'Boho wall decor.',
        image: '/products/decor.jpeg',
        thumbnail: '/products/decor-thumb.webp',
        priceInCents: 2600,
        category: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 5
    },
    {
        id: '10000013-0000-0000-0000-000000000013',
        name: 'Wooden Spoon Set',
        description: 'Kitchen set.',
        image: '/products/spoons.jpg',
        thumbnail: '/products/spoons-thumb.webp',
        priceInCents: 1800,
        category: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },
    {
        id: '10000014-0000-0000-0000-000000000014',
        name: 'Canvas Painting',
        description: 'Original painting.',
        image: '/products/painting.jpeg',
        thumbnail: '/products/painting-thumb.webp',
        priceInCents: 4000,
        category: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 5
    },
    {
        id: '10000015-0000-0000-0000-000000000015',
        name: 'Soy Candle',
        description: 'Natural candle.',
        image: '/products/candle2.webp',
        thumbnail: '/products/candle2-thumb.webp',
        priceInCents: 1600,
        category: '99999999-9999-9999-9999-999999999999',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 4
    },

    {
        id: '10000016-0000-0000-0000-000000000016',
        name: 'Leather Bag',
        description: 'Handmade bag.',
        image: '/products/bag.webp',
        thumbnail: '/products/bag-thumb.webp',
        priceInCents: 5500,
        category: '12121212-1212-1212-1212-121212121212',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 5
    },
    {
        id: '10000017-0000-0000-0000-000000000017',
        name: 'Planner',
        description: 'Daily planner.',
        image: '/products/planner.jpeg',
        thumbnail: '/products/planner-thumb.webp',
        priceInCents: 1900,
        category: '13131313-1313-1313-1313-131313131313',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },
    {
        id: '10000018-0000-0000-0000-000000000018',
        name: 'Hair Accessories',
        description: 'Cute accessories.',
        image: '/products/hair.webp',
        thumbnail: '/products/hair-thumb.webp',
        priceInCents: 1300,
        category: '14141414-1414-1414-1414-141414141414',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 4
    },
    {
        id: '10000019-0000-0000-0000-000000000019',
        name: 'Gold Earrings',
        description: 'Elegant earrings.',
        image: '/products/earrings.jpg',
        thumbnail: '/products/earrings-thumb.webp',
        priceInCents: 3000,
        category: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 5
    },
    {
        id: '10000020-0000-0000-0000-000000000020',
        name: 'Tea Set',
        description: 'Ceramic tea set.',
        image: '/products/tea.webp',
        thumbnail: '/products/tea-thumb.webp',
        priceInCents: 4200,
        category: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 5
    },

    {
        id: '10000021-0000-0000-0000-000000000021',
        name: 'Blanket',
        description: 'Soft textile blanket.',
        image: '/products/blanket.webp',
        thumbnail: '/products/blanket-thumb.webp',
        priceInCents: 4800,
        category: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 5
    },
    {
        id: '10000022-0000-0000-0000-000000000022',
        name: 'Macrame Decor',
        description: 'Wall hanging decor.',
        image: '/products/macrame.jpg',
        thumbnail: '/products/macrame-thumb.webp',
        priceInCents: 2500,
        category: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 4
    },
    {
        id: '10000023-0000-0000-0000-000000000023',
        name: 'Cutting Board',
        description: 'Wooden board.',
        image: '/products/board.webp',
        thumbnail: '/products/board-thumb.webp',
        priceInCents: 2300,
        category: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 4
    },
    {
        id: '10000024-0000-0000-0000-000000000024',
        name: 'Print Set',
        description: 'Set of prints.',
        image: '/products/prints.webp',
        thumbnail: '/products/prints-thumb.webp',
        priceInCents: 2700,
        category: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 5
    },
    {
        id: '10000025-0000-0000-0000-000000000025',
        name: 'Aromatic Candle',
        description: 'Relax candle.',
        image: '/products/candle3.jpg',
        thumbnail: '/products/candle3-thumb.webp',
        priceInCents: 1700,
        category: '99999999-9999-9999-9999-999999999999',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },

    {
        id: '10000026-0000-0000-0000-000000000026',
        name: 'Key Holder',
        description: 'Leather key holder.',
        image: '/products/key.webp',
        thumbnail: '/products/key-thumb.webp',
        priceInCents: 1200,
        category: '12121212-1212-1212-1212-121212121212',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 4
    },
    {
        id: '10000027-0000-0000-0000-000000000027',
        name: 'Greeting Cards',
        description: 'Set of cards.',
        image: '/products/cards.webp',
        thumbnail: '/products/cards-thumb.webp',
        priceInCents: 900,
        category: '13131313-1313-1313-1313-131313131313',
        seller: '77777777-7777-7777-7777-777777777777',
        rating: 4
    },
    {
        id: '10000028-0000-0000-0000-000000000028',
        name: 'Handmade Hat',
        description: 'Stylish hat.',
        image: '/products/hat.webp',
        thumbnail: '/products/hat-thumb.webp',
        priceInCents: 2200,
        category: '14141414-1414-1414-1414-141414141414',
        seller: '88888888-8888-8888-8888-888888888888',
        rating: 5
    },
    {
        id: '10000029-0000-0000-0000-000000000029',
        name: 'Ring Set',
        description: 'Minimal rings.',
        image: '/products/rings.webp',
        thumbnail: '/products/rings-thumb.webp',
        priceInCents: 2600,
        category: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
        seller: '55555555-5555-5555-5555-555555555555',
        rating: 4
    },
    {
        id: '10000030-0000-0000-0000-000000000030',
        name: 'Clay Plate',
        description: 'Decor plate.',
        image: '/products/plate.jpg',
        thumbnail: '/products/plate-thumb.webp',
        priceInCents: 2100,
        category: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
        seller: '66666666-6666-6666-6666-666666666666',
        rating: 4
    }
];

const carts = [
    {
        id: '90000001-0000-0000-0000-000000000001',
        userId: '22222222-2222-2222-2222-222222222222',
        products: [
            {
                productId: '10000001-0000-0000-0000-000000000001',
                quantity: 1
            },
            {
                productId: '10000003-0000-0000-0000-000000000003',
                quantity: 2
            }
        ]
    },
    {
        id: '90000002-0000-0000-0000-000000000002',
        userId: '44444444-4444-4444-4444-444444444444',
        products: [
            {
                productId: '10000002-0000-0000-0000-000000000002',
                quantity: 1
            },
            {
                productId: '10000005-0000-0000-0000-000000000005',
                quantity: 1
            },
            {
                productId: '10000006-0000-0000-0000-000000000006',
                quantity: 1
            }
        ]
    },
    {
        id: '90000003-0000-0000-0000-000000000003',
        userId: '11111111-1111-1111-1111-111111111111',
        products: [
            {
                productId: '10000010-0000-0000-0000-000000000010',
                quantity: 1
            },
            {
                productId: '10000014-0000-0000-0000-000000000014',
                quantity: 1
            }
        ]
    },
    {
        id: '90000004-0000-0000-0000-000000000004',
        userId: '33333333-3333-3333-3333-333333333333',
        products: [
            {
                productId: '10000020-0000-0000-0000-000000000020',
                quantity: 1
            },
            {
                productId: '10000021-0000-0000-0000-000000000021',
                quantity: 1
            },
            {
                productId: '10000025-0000-0000-0000-000000000025',
                quantity: 2
            }
        ]
    }
];

const reviews = [
    {
        id: '80000001-0000-0000-0000-000000000001',
        userId: '22222222-2222-2222-2222-222222222222',
        productId: '10000001-0000-0000-0000-000000000001',
        rating: 5,
        comment: 'Great product!'
    },
    {
        id: '80000002-0000-0000-0000-000000000002',
        userId: '44444444-4444-4444-4444-444444444444',
        productId: '10000002-0000-0000-0000-000000000002',
        rating: 4,
        comment: 'Good value for money.'
    }
];


export { users, products, categories, carts, reviews };