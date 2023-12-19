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
import { cn } from "@/src/lib";
import { Loader, Mail } from "lucide-react";
import { PasswordInput } from "@/src/components/PasswordInput";

export const LoginScreen: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInput> = async (input) => {
    startTransition(async () => {
      const { token, error } = await onLoginSubmit(input);
      if (token) {
        toast.success("Signed in successfully");
        router.push("/admin");
      } else if (error) {
        toast.error(error);
      }
    });
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
                <div className="relative">
                  <span className="absolute start-0 flex h-10 items-center px-3 text-muted-foreground">
                    <Mail size={20} />
                  </span>
                  <Input
                    id="email"
                    placeholder="Enter your name"
                    type="email"
                    className={cn(
                      "px-10 text-slate-600",
                      `${
                        errors?.email
                          ? "border-red-400 focus:ring-1 focus:ring-red-400"
                          : ""
                      }`
                    )}
                    {...register("email")}
                  />
                  {errors && (
                    <p className="text-red-500 italic text-xs">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  className={cn(
                    `${
                      errors?.password
                        ? "border-red-400 focus:ring-1 focus:ring-red-400"
                        : ""
                    }`
                  )}
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
          <CardFooter className="flex justify-between float-right">
            <Button>
              Login{" "}
              <Loader className={cn("animate-spin", { hidden: !isPending })} />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
