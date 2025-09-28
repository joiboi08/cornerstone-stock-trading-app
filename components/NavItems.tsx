'use client'


import React from 'react'
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {

    const pathName = usePathname();
    // because we used a hook, put 'use client' above
    // this hook lets you access browser resources to read current page URL path

    // this func below crosschecks provided url path ('path') vs current page url path
    const isActive = (path: string) => {
        if (path == '/') return pathName == '/';

        // for other cases, we are checking if pathname and path start with same words (?)
        return pathName.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {
                NAV_ITEMS.map(({ href, label }) => {
                    return (
                        <li key={href}>
                            <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                                isActive(href) ? 'text-gray-100' : ''
                            }`
                            } >{label}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default NavItems
