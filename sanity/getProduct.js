import { createClient, groq } from 'next-sanity'

export async function getProduct() {
  const client = createClient({
    projectId: 'mjkpoclj',
    dataset: 'production',
    apiVersion: '2023-06-18',
  })

  return client.fetch(
    groq`*[_type == 'product']{
  _id, 
  _createdAt,
  name,
  image,
  price,
  "slug":slug.current,
  'image': image.asset->url,
  url,
  content
    }`
  )

}

export async function getProducts(slug) {
  const client = createClient({
    projectId: 'mjkpoclj',
    dataset: 'production',
    apiVersion: '2023-06-18',
  })

  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == $slug]{ 
      _id, 
      _createdAt,
      name,
      image,
      price,
      "slug": slug.current,
      'image': image.asset->url,
      url,
      content
    }`,
    { slug }
  )

  return product[0] 
}