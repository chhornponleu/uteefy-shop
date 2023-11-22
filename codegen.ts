import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.uteefy.com/graphql',
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ['./**/*.{ts,tsx}', '!./services/gql/**/*'],
    generates: {
        './services/gql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'graphql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;