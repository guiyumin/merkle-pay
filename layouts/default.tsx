import { Link } from "@nextui-org/link";
import { Navbar } from "root/components/navbar";

import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-2 md:px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://merklepay.io"
          title="Merkle Pay homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Merkle Pay</p>
        </Link>
      </footer>
    </div>
  );
}
