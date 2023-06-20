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
  "slug":slug.current,
  'image': image.asset->url,
  url,
  content
    }`
  )

}
