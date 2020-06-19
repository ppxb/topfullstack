import gql from 'graphql-tag'
import { apolloClient } from '../client'

export const getRecipes = async () => {
  const res = await apolloClient.query({
    query: gql`
      query {
        list: recipes {
          _id
          title
          description
        }
      }
    `
  })

  return res.data.list
}
