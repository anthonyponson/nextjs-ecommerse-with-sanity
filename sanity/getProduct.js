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

  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == $slug]{ 
      _id, 
      _createdAt,
      name,
      image,
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
    { slug }
  )

  return product[0]
}

//array of products

// export async function arrayOfProducts() {
//   const client = createClient({
//     projectId: 'mjkpoclj',
//     dataset: 'production',
//     apiVersion: '2023-06-18',
//   })

//   return client.fetch(
//     groq`*[_type == 'products']{
//       _id,
//       _createdAt,
//       name,
//       price,
//       details,
//       'slug': slug.current,
//       url,
//       content,
//       images[] {
//         alt,
//         'url': asset->url
//       }
//     }`
//   )
// }
