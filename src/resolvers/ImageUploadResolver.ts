import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

import { Upload } from '../types/Upload';

@Resolver()
export class ImageUploadResolver {
    @Query(() => String)
    hello(): String {
        return "helloWorld!";
    }

    @Mutation(() => Boolean)
    async uploadImage(@Arg("picture", () => GraphQLUpload) {
        createReadStream,
        filename
    }: Upload): Promise<boolean> {
        return new Promise(async (resolve, reject) =>
            createReadStream()
                .pipe(createWriteStream(__dirname + `/../../images/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }
}