"use server";

import { LoginAdminUserDocument } from "@/src/__generated__/graphql";
import { getClient } from "@/src/lib";
import { LoginInput } from "@/src/schema";
import { cookies } from "next/headers";

export default async function onLoginSubmit(input: LoginInput) {
  const { data, error } = await getClient().mutation(LoginAdminUserDocument, {
    input,
  });

  if (data?.loginAdminUser?.token) {
    cookies().set("token", data.loginAdminUser.token);
  }

  return {
    token: data?.loginAdminUser?.token,
    error: error?.message,
  };
}
