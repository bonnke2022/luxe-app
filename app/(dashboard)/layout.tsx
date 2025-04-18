import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-[100vh]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
