import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './graphql/schema/drinksApi';

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
