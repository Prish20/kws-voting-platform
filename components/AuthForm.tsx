"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    DefaultValues,
    Path,
    SubmitHandler,
    useForm,
    UseFormReturn,
} from "react-hook-form";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import { ZodType } from "zod";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { Input } from "./ui/input";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit,
}: Props<T>) => {
    const router = useRouter();
    const isSignIn = type === "SIGN_IN";
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {
        const result = await onSubmit(data);

        if (result.success) {
            toast({
                title: "Success",
                description: isSignIn
                    ? "You have successfully signed in."
                    : "You have successfully signed up.",
                className: "bg-green-500 border-none",
            });

            router.push("/");
        } else {
            toast({
                title: `Error ${isSignIn ? "signing in" : "signing up"}`,
                description: result.error ?? "An error occurred.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn
                    ? "Welcome back!"
                    : "Create Your Account"}
            </h1>
            <p className="text-light-100">
                {isSignIn
                    ? "Please complete all the fields to sign in to your account."
                    : "Please complete all the fields to create your account."}
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full space-y-6"
                >
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">
                                        {
                                            FIELD_NAMES[
                                            field.name as keyof typeof FIELD_NAMES
                                            ]
                                        }
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            type={
                                                FIELD_TYPES[
                                                field.name as keyof typeof FIELD_TYPES
                                                ]
                                            }
                                            {...field}
                                            className="form-input"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <Button type="submit" className="form-btn">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>
            <p className="text-center text-base font-medium">
                {isSignIn ? "Dont have an account? " : "Already have an account? "}
                <Link
                    className="font-bold text-primary"
                    href={isSignIn ? "/sign-up" : "/sign-in"}
                >
                    {isSignIn ? "Sign Up" : "Sign In"}
                </Link>
            </p>
        </div>
    );
};

export default AuthForm;
