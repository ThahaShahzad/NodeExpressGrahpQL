import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    Peoples: [People!]!
    People(name: String!): People
  }
  type People {
    id: ID!
    name: String!
    email: String!
    nickName: String
    favoriteColor: String
    age: Int
    dateBorn: Date
  }
  extend type Mutation {
    createPeople(
      name: String!
      email: String!
      nickName: String
      favoriteColor: String
      age: Int
      dateBorn: Date
    ): People
    updatePeople(
      id: ID!
      name: String
      email: String
      nickName: String
      favoriteColor: String
      age: Int
      dateBorn: Date
    ): People
    deletePeople(id: ID!): People
  }
`
