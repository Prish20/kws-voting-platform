
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {

    return (
        <main className="auth-container">
            <section className="auth-form">
                <div className="auth-box">
                    <div>{children}</div>
                </div>
            </section>
            <section className="auth-illustration">
                <Image
                    src="/images/auth-illustration.png"
                    alt="auth"
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                />
            </section>
        </main>
    );
};

export default layout;
