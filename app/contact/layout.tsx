import type { PropsWithChildren } from "react";

import { Header } from "../(marketing)/header";

const ContactLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 flex-col">
                {children}
            </main>
        </div>
    );
};

export default ContactLayout;
