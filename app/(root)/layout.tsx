import React from 'react'
import Header from "@/components/Header";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
       <main className="min-h-screen text-gray-400">
           <Header />
            <div className="container py-10">
                {children}
            </div>
       </main>
    )
}
export default Layout

// react.reactnode basically means any component passed to this layout, and we will render it like so, with a Header
// component always above it.
