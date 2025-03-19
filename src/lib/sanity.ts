
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Initialize the Sanity client
export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Fetch products from Sanity
export async function fetchProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    description,
    price,
    "specs": specifications,
    "imageUrl": mainImage.asset->url
  }`;
  
  return client.fetch(query);
}
