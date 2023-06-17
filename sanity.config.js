import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'mjkpoclj',
  dataset: 'production',
  title: 'ecommerse',
  apiVersion: '6/14/2023',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas},
})

export default config
