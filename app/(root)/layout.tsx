import React from "react";
import Navbar from "../component/Navbar";

type LayoutProps = {
  readonly children: React.ReactNode;
};

export default function Layout ({ children } : LayoutProps ){
    return(
        <main>
            <Navbar />
            {children}
        </main>
    )
}