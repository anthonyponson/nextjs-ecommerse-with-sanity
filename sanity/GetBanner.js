import { createClient, groq } from 'next-sanity'

export async function getBanner() {
  const client = createClient({
    projectId: 'mjkpoclj',
    dataset: 'production',
    apiVersion: '2023-06-18',
  })

  return client.fetch(
    groq`*[_type == 'banner']{
  _id, 
  _createdAt,
  name,
  image,
  desc,
  button,
  smallText,
  midText,
  largeText1,
  largeText2,
  discount,
  saleTime,
  "slug":slug.current,
  'image': image.asset->url,
  url,
  content
    }`
  )

}
