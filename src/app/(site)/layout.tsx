import React from "react";
import Header from "@/components/landing_page/header";

const HomeLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <main>
            <Header/>
            {children}
        </main>
    )
}
export default HomeLayout
