import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'

import product from './sanity/schemas/product'

import schemas from './sanity/schemas'

import banner from './sanity/schemas/banner'

const config = defineConfig({
  projectId: 'mjkpoclj',
  dataset: 'production',
  title: 'ecommerse',
  apiVersion: '6/14/2023',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})


export default config
