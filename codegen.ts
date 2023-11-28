import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.uteefy.com/graphql',
    // schema: 'http://localhost:3000/graphql',
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        'graphql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;