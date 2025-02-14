"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/FormValidation/validation";


import React from "react";

{/* Implement actual signin logic here or in a separate file and call the function*/ }
const signInWithCredentials = async () => {
    console.log("Sign in with credentials");
    return { success: true };
};

const SignIn = () => (
    <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            email: "",
            password: "",
        }}
        onSubmit={signInWithCredentials}
    />
);

export default SignIn;
