import type React from "react";

type props = { children: React.ReactNode };
export default ({ children }: props) => (
    <body className="dark:bg-gray-950">{children}</body>
);