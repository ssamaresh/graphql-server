const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet!]
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    user: User!
    img: String
  }

  input PetInput {
    name: String
    type: String
    img: String
  }

  input NewPetInput {
    name: String!
    type: String!
    img: String
  }

  type Query {
    user: User!
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet!
  }

  type Mutation {
    pet(input: NewPetInput!) : Pet!
  }
`;

module.exports = typeDefs