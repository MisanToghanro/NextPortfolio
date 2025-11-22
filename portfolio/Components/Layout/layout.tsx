import React from "react"
import Footer from "./footer"
import Header from "./Header"
import Head from "next/head"

interface LayoutProps{
    children: React.ReactNode
    title?: string;

}

const Layout: React.FC<LayoutProps> = ({children, title}) => {

    return(
        <div className="flex-col">
      <Head>
        <title>{title ?? "Misan Toghanro – Frontend Developer"}</title>
        <meta name="description" content="Frontend Developer Portfolio" />
      </Head>
            <Header/>
            <main className="grow">
             {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;