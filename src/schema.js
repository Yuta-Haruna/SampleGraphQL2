const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        user: User
    }

    type User {
        id: ID
        name: String
    }
`);

module.exports = schema;
