import React from "react"
import Footer from "./footer"
import Header from "./Header"

interface LayoutProps{
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    return(
        <div className="flex-col">
            <Header/>
            <main className="grow">
             {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;