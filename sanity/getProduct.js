

import { createClient, groq } from 'next-sanity'

export async function getProduct() {
  const client = createClient({
    projectId: 'mjkpoclj',
    dataset: 'production',
    apiVersion: '2023-06-18',
  })

  return client.fetch(
    groq`*[_type == 'product']{ 
      _createdAt,
      name,
      id,
      price,
      details,
      'slug': slug.current,
      images[] {
        alt,
        'url': asset->url
      }
    }`
  )
}



export async function getProducts(slug) {
  const client = createClient({
    projectId: 'mjkpoclj',
    dataset: 'production',
    apiVersion: '2023-06-18',
  })

  console.log('slug', slug)
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == $slug]{
      _id,
      _createdAt,
      name,
      details,
      price,
      "slug": slug.current,
      images[] {
        alt,
        'url': asset->url
      },
      url,
      content
    }`,
    {slug : slug || '' }
  )

  return product
}
