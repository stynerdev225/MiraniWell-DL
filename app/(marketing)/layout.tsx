import type { PropsWithChildren } from "react";

import { Footer } from "@/components/Footer";

import { Header } from "./header";

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center mt-8 md:mt-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLayout;
