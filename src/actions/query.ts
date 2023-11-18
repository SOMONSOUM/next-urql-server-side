"use server";

import { AdminMeDocument } from "@/src/__generated__/graphql";
import { getClient } from "@/src/lib";

export async function getMe() {
  const { data, error } = await getClient().query(AdminMeDocument, {});
  return {
    me: data?.adminMe,
    error: error?.message,
  };
}
