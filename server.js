const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./graphql/schema/drinksApi');

const app = express();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphql: true
	})
);

const port = process.env.PORT || 7500;

app.listen(port, () => console.log(`Server is up on port ${port}`));
