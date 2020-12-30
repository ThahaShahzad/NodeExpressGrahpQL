import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }
  extend type Mutation {
    signUp(name: String!, email: String!, password: String!): Boolean!
    logIn(email: String!, password: String!): User
  }
  type User {
    id: ID!
    email: String!
    name: String!
  }
`
