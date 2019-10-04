require('es6-promise').polyfill();
require('universal-fetch');

const endpoint = 'http://5d9697e3a824b400141d2796.mockapi.io/api/v1';

const resolver = {
  Query: {
    users: () => fetch(`${endpoint}/users`).then(response => response.json()),
    user: (_, { id }) => fetch(`${endpoint}/users/${id}`).then(response => response.json())
  },

  Mutation: {
    createUser: () => { }
  }
}

module.exports = resolver;
