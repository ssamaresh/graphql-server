/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user(_, __, {models}) {
      return models.User.findOne();
    },
    pets(_, {input}, {models}) {
      return models.Pet.findMany(input);
    },
    pet(_, {input}, {models}) {
      return models.Pet.findOne(input);
    }
  },
  Mutation: {
    pet(_, {input}, {models}) {
      return models.Pet.create(input);
    }    
  },
  Pet: {
    user(pet, __, {models, user}) {
      return user;
    }
  },
  User: {
    pets(user, __, {models}) {
      return models.Pet.findMany();
    }    
  }
}