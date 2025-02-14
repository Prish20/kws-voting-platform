import { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="root-container">

            {/* Implement actual header here*/}
            <div>
                <h1 className="text-white">HEADER</h1>
            </div>

            <div className=" mx-auto max-w-7xl">
                <div className="mt-20 pb-20">{children}</div>
            </div>

            {/* Implement actual footer here*/}
            <div>
                <h1 className="text-white">FOOTER</h1>
            </div>
        </main>
    );
};

export default layout;
