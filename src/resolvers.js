require('es6-promise').polyfill();
require('universal-fetch');

const endpoint = 'http://5d9697e3a824b400141d2796.mockapi.io/api/v1/users/';

const getUsers = async () => {
  const response = await fetch(endpoint);
  const users = await response.json();
  return users;
}

const resolver = {
  Query: {
    users: () => getUsers(),
    user: () => users[0]
  },

  Mutation: {
    createUser: () => { }
  }
}

module.exports = resolver;
