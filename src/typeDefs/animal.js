import { gql } from 'apollo-server-express'
import { GraphQLScalarType } from 'graphql/type'

const Date = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value
  }
})

export default gql`
  scalar Date
  extend type Query {
    Animals: [Animal!]!
    Animal(name: String!): Animal
  }
  type Animal {
    id: ID!
    name: String!
    nickName: String!
    animalType: String
    furDepth: Int
    age: Int
    dateBorn: Date
  }
  extend type Mutation {
    createAnimal(name: String!, nickName: String!, animalType: String, furDepth: Int, age: Int, dateBorn: Date): Animal
    updateAnimal(
      id: ID!
      name: String
      nickName: String
      animalType: String
      furDepth: Int
      age: Int
      dateBorn: Date
    ): Animal
    deleteAnimal(id: ID!): Animal
  }
`
