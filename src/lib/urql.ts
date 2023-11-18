import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { cookies } from "next/headers";

const endpoint = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "https://test-api-cl.moc.gov.kh/graphql";

const makeClient = () => {
  return createClient({
    url: endpoint,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token = cookies().get("token")?.value;
      return {
        credentials: "same-origin",
        headers: { Authorization: token ? `Bearer ${token}` : `` },
      };
    },
  });
};

export const { getClient } = registerUrql(makeClient);
