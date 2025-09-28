import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdownMenu from "@/components/UserDropdownMenu";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="Cornerstone Logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropdownMenu />
            </div>
        </header>
    )
}
export default Header


// since NavItems contents are needed both as navbar and in the Userdropdown as well, we create a separate NavItems component instead of linking all nav items inside above Link
