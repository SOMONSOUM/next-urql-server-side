"use client";

import * as React from "react";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import onLoginSubmit from "./actions/login";
import toast, { Toaster } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, UserSchema } from "@/src/schema";
import { useRouter } from "next/navigation";

export const LoginScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInput> = async (input) => {
    const { token, error } = await onLoginSubmit(input);

    if (token) {
      toast.success("Signed in successfully", {
        duration: 2000,
      });
      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } else if (error) {
      toast.error(error, {
        icon: "🔥",
      });
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster />
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account in one-click.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your name"
                  type="email"
                  {...register("email")}
                />
                {errors && (
                  <p className="text-red-500 italic text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password")}
                />
                {errors && (
                  <p className="text-red-500 italic text-xs">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="destructive">Cancel</Button>
            <Button>Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
