import 'reflect-metadata';

import { buildSchema } from "type-graphql";
import { ImageUploadResolver } from "./resolvers/ImageUploadResolver";
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';

const PORT = 3000;

const main = async () => {
    const schema = await buildSchema({
        resolvers: [ImageUploadResolver],
    });

    const apolloServer = new ApolloServer({
        schema,
        playground: true
    });

    const app = Express();

    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Server started on localhost:${PORT}/graphql`);
    })
};

main();
