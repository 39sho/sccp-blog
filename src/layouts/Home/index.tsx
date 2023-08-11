import type React from "react";
import Spacer from "@/features/Header/Spacer";

type props = { children: React.ReactNode };
export default ({ children }: props) => {
    return (
        <div className="flex flex-col items-center">
            <Spacer />
            <main className="flex container flex-col items-center gap-10">
                {children}
            </main>
            <Spacer />
        </div>
    );
};