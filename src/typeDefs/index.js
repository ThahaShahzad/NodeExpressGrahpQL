import user from './user'
import animal from './animal'
import people from './people'
import { gql } from 'apollo-server-express'

const root = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription {
    _: String
  }
`

export default [root, user, animal, people]
