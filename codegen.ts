import { CodegenConfig } from "@graphql-codegen/cli";

const endpoint = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "https://test-api-cl.moc.gov.kh/graphql";

const config: CodegenConfig = {
  schema: endpoint,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
