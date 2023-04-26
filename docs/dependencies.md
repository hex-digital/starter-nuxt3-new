# Technical Reference > Code Dependencies

Below is information relating to the code dependencies in this project.

The following allow us to use Nuxt:

- nuxt

The following allow us to use VueUse composables across our app:

@vueuse/nuxt
@vueuse/components
@vueuse/shared
@vueuse/integrations

The following are used for styles and Tailwind:

- postcss-import
- [postcss-extend-rule](https://github.com/csstools/postcss-extend-rule)
- @nuxtjs/tailwindcss
- @captaincss/captaincss

The following allow us to use .gql files, and let Vite understand how to import them:

- @rollup/plugin-graphql

The following are used to generate GraphQL types across our codebase. That includes
generating a file with all types from the API, as well as types for all our .gql files:

- @graphql-codegen/add
- @graphql-codegen/cl
- @graphql-codegen/introspection
- @graphql-codegen/near-operation-file-preset
- @graphql-codegen/typescript
- @graphql-codegen/typescript-operations
