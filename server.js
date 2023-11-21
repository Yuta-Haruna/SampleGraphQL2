const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema');
const resolvers = require('./src/resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	graphiql: true,
}));

app.listen(4000, () => console.log('Server is running on http://localhost:4000/graphql'));
