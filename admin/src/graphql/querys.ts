import gql from 'graphql-tag'
import { DollarApollo } from 'vue-apollo/types/vue-apollo'

export const getRecipes = () => gql`
  query {
    list: recipes {
      _id
      title
      description
    }
  }
`

export const authAdmin = (apllo: DollarApollo<any>, params: any) => {
  return apllo.query({
    query: gql`
      query($username: String!, $password: String!) {
        auth(username: $username, password: $password) {
          admin {
            _id
            username
            nickname
            avatar
            roles
          }
          token
        }
      }
    `,
    variables: {
      ...params
    }
  })
}
