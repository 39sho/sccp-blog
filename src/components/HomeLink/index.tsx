import type React from "react";

type props = { link: string, children: React.ReactNode };

export default ({ link, children }: props) => {
    return (
        <div className="flex px-4 py-2 justify-center items-center gap-2">
            <a href={link} className="font-sans text-xl font-bold tracking-wider">{children}</a>
        </div>
    )
};