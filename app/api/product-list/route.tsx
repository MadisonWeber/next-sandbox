import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

const generateFakeProducts = (num: number) => {
  return Array.from({ length: num }).map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    // image: faker.image.url(),
    image: `https://picsum.photos/seed/${index}/400/400`,
    category: faker.commerce.department(),
  }));
};

export async function GET() {
  const products = generateFakeProducts(10);

  return NextResponse.json(products);
}
