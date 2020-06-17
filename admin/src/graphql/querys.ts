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

export const authAdmin = (apollo: DollarApollo<any>, params: any) => {
  return apollo.query({
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

export const getAdminInfo = (apollo: DollarApollo<any>, params: any) => {
  return apollo.query({
    query: gql`
      query($token: String!) {
        getAdminInfo(token: $token) {
          _id
          username
          nickname
          avatar
          roles
        }
      }
    `,
    variables: {
      ...params
    }
  })
}
