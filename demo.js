const gql = require('graphql-tag');
const {ApolloServer} = require('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String!
    friends: [User]!
  }

  type Query {
    me: User!
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        email: 'Iyodaam@gmail.com',
        avatar: 'https://yoda.com',
        friends: []
      }
    }
  }  
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(8088).then(() => console.log('Running on Port 8088'));
