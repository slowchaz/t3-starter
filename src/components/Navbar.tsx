import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hippo</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link 
                            href="/find-builds" className="link" aria-current="page">
                                Find Build
                            </Link>
                        </li>
                        <li>
                            <Link href="/submit-build" className="link" aria-current="page">
                                Create Build
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}