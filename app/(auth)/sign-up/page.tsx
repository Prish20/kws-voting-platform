"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/FormValidation/validation";


{/* Implement actual signup logic here or in a separate file and call the function*/ }
const signUp = async () => {
    console.log("Sign up with credentials");
    return { success: true };
};

const Page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }}
        onSubmit={signUp}
    />
);

export default Page;
