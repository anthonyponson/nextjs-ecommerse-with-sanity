
// import createImageUrlBuilder from '@sanity/image-url'

import {createClient} from '@sanity/client'

export const newClient = createClient({
  projectId: 'mjkpoclj',
  dataset: 'production',
  apiVersion: '2023-06-20',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// const builder = createImageUrlBuilder(newClient)

// export const urlFor = (source) => builder.image(source) 