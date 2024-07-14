import request from 'supertest';
import app from '../app';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { Product } from '../models/Product';

beforeAll(async () => {
  const connection = await createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: ["src/models/**/*.ts"],
    synchronize: true,
    logging: false,
  });

  const productRepository = getRepository(Product);
  await productRepository.save({
    name: 'Test Product',
    description: 'This is a test product',
    price: 100,
    inventory: 10
  });
});

afterAll(async () => {
  await getConnection().close();
});

describe('API Tests', () => {
  it('GET /products - should return a list of products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'Test Product',
        description: 'This is a test product',
        price: 100,
        inventory: 10
      }
    ]);
  });

  it('GET /products/:id - should return a specific product', async () => {
    const res = await request(app).get('/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      id: 1,
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      inventory: 10
    });
  });

  it('POST /products - should create a new product', async () => {
    const newProduct = { name: 'Test Product 2', description: 'This is another test product', price: 200, inventory: 20 };
    const res = await request(app).post('/products').send(newProduct);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(expect.objectContaining(newProduct));
  });

  it('PUT /products/:id - should update a specific product', async () => {
    const updatedProduct = { name: 'Updated Product', description: 'Updated description', price: 150, inventory: 15 };
    const res = await request(app).put('/products/1').send(updatedProduct);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.objectContaining(updatedProduct));
  });

  it('DELETE /products/:id - should delete a specific product', async () => {
    const res = await request(app).delete('/products/1');
    expect(res.statusCode).toEqual(204);
  });
});
