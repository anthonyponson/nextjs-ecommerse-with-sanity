import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'

 const config = defineConfig({
  projectId: 'mjkpoclj',
  dataset: 'production',
  title: 'ecommerse',
  apiVersion: '6/14/2023',
  basePath: '/admin',
  plugins:[ deskTool () ]
})

export default config