import Nav from "@/components/Nav";
import Side from "@/components/Side";
import React, { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Side />
      </div>
      <div className="lg:col-span-4">
        <div className="lg:hidden">
          <Nav />
        </div>
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}

export default layout;
