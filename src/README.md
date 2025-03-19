
# Fulldempet Elsykkel Website

## Sanity Studio Setup

To connect this website with your Sanity Studio:

1. Replace the `projectId` in `src/lib/sanity.ts` with your Sanity project ID.
2. Make sure your Sanity schema includes the following types:

```js
// product.js schema
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ]
}
```

3. Add some products in your Sanity Studio.
4. Make sure CORS is configured to allow your frontend to fetch data from Sanity.
