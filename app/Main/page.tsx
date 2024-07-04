"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';



const Mainscreen = () => {

    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('Security');



    const menuItems = [
        {
            name: 'Home', path: '/', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
            </svg>
        },
        {
            name: 'All files', path: '/files', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
            </svg>
        },
        {
            name: 'Private files', path: '/private', icon: <svg className="w-6 h-6 text-white -800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h6M9 3v4a1 1 0 0 1-1 1H4m11 13a11.426 11.426 0 0 1-3.637-3.99A11.139 11.139 0 0 1 10 11.833L15 10l5 1.833a11.137 11.137 0 0 1-1.363 5.176A11.425 11.425 0 0 1 15.001 21Z" />
            </svg>
        },
        {
            name: 'Shared with me', path: '/shared', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        },
        {
            name: 'Deleted files', path: '/deleted', icon: <svg className="w-6 h-5  text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
        },
        {
            name: 'Design', path: '/design', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
            </svg>
        },
        {
            name: 'Notifications', path: '/notifications', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
            </svg>
        },
        {
            name: 'Settings', path: '/settings', icon: <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        }
    ];

    const tabs = [
        { name: 'General', href: '/general' },
        { name: 'Security', href: '/security' },
        { name: 'Billing', href: '/billing' },
        { name: 'Notifications', href: '/notifications' },
        { name: 'Apps', href: '/apps' },
        { name: 'Branding', href: '/branding' },
        { name: 'Refer a friend', href: '/refer' },
        { name: 'Sharing', href: '/sharing' },
    ];




    return (
        <div className="flex">


            <div className="w-64 bg-gray-800  h-screen p-5 text-white" >
                <div className="mb-4 ml-1 flex items-center justify-between">
                    <div className="text-2xl">Untitled UI </div>
                    {/* <div className="float-right"></div> */}
                    <div>
                        
                        <svg className="w-3 h-4 float-right text-white-800 ml-1 text-xs dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                        </svg>
                        
                        <p className="text-xs float-right">v 4.0</p>
                    </div>
                </div>

                <nav className="flex flex-col mt-6">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.name} className={`mb-3 ${pathname === item.path ? 'font-bold' : ''}`}>
                                <Link href={item.path} legacyBehavior>
                                    <a
                                        className={`flex items-center px-2 py-1 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white ${pathname === item.path ? 'bg-gray-700 text-white' : ''
                                            }`}
                                    >
                                        <span className="mr-4">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>

                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs ml-3">FILE BROWSER</p>
                    </div>
                    <div>
                        <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                        </svg>

                    </div>
                </div>
                


                <div className="bg-gray-700 p-2 fixed bottom-0  rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="ml-2">
                            <p className="text-white">Storage</p>
                        </div>
                        <div className="ml-3">
                            <a className="text-xs">upgrade</a>
                        </div>
                    </div>

                    <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden mx-2">
                        <div className="bg-gray-300 h-full" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-gray-400 text-xs ml-3 mt-2">9.2 GB of 10 GB used</p>
                </div>

            </div>




            <div className="flex-1 bg-gray-900">

                <div className="flex justify-between items-center bg-gray-900 p-5 text-white">
                    <div>
                        <h1 className="text-xl">Mia de Silva</h1>
                        <p>Manage your details and personal preferences here.</p>
                    </div>
                    <div>

                    </div>
                    <div>
                        <input type="text" className="bg-gray-700 text-white rounded-full  pl-4 pr-4 px-2 py-1 float-left mr-3 "
                            placeholder="Search"
                        />
                        <button className="bg-gray-500  px-2 py-1 mr-4 float-left rounded">+ Invite</button>
                        <button className="bg-blue-500 px-2 py-1 mr-4 float-left rounded">Upgrade</button>
                        <Image src="/profile.jpg" alt="Example" className="rounded-full w-10 h-10 ml-4" width={10} height={10}  />

                    </div>
                </div>



                <div className="flex space-x-4 bg-gray-900 p-3">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-3 py-2 rounded ${activeTab === tab.name
                                ? 'bg-gray-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>


                <div className="flex items-center rounded-lg justify-between ml-5 mr-5 rounded  bg-gray-700  p-2  text-white">

                    <div className="flex items-center">
                        <div className="relative w-10 h-10 mr-3">
                            <svg
                                className="w-full h-full text-blue-500"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeDasharray="90, 100"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">

                            </div>
                        </div>
                        <div>
                            <p className="font-medium">Your account security is 90%</p>
                            <p className="text-sm text-gray-400">Please review your account security settings regularly and update your password.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 mr-3">
                        <button className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-500">Dismiss</button>
                        <button className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-400">Review security</button>
                    </div>
                </div>


                <div className="p-5 bg-gray-900">
                    <h2 className="text-white">Basics</h2>
                </div>







                <div className=" bg-gray-900">

                    <div className="bg-gray-900  rounded text-white">

                        <div className="flex justify-between items-center bg-gray-900 p-5 pt-0">
                            <div>
                                <h5>Password</h5>
                                <p className="text-sm text-gray-400">Set a password to protect your account.</p>
                            </div>
                            <div className="float-right">
                                <p  >●●●●●●●●●   <span className="text-green-500">Very secure</span></p>
                            </div>

                            <div className="flex space-x-2 mr-3">
                                <button className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-500">Edit</button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center bg-gray-900 p-5 pt-0">
                            <div>
                                <h5>Two-Step Verification</h5>
                                <p className="text-sm text-gray-400">We recommend requiring a verification </p>
                                <p className="text-sm text-gray-400">code in addition to your password..</p>
                            </div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" checked />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                            <div className="flex space-x-2 mr-3">
                                <button className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-500">Edit</button>
                            </div>
                        </div>

                        <div className="p-5  border-t-white">
                            <h5>Browsers and devices</h5>
                            <p className="text-sm text-gray-400">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>
                        </div>



                        <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg ">
                            <div className="flex items-center">
                                <div className="w-10 h-10 mr-4">
                                    <Image src="/brave.jpg" alt="Example" className="rounded-full w-8 h-8 ml-4" width={8} height={8}  />
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-medium m-2">Brave on Mac OS X</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 ml-20">Ninh Binh, Vietnam</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-green-500 mr-4">●</span>
                                <span className="text-gray-500">Current session</span>
                            </div>
                            <div>
                                <svg className="w-6 h-5 mr-3 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>

                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg ">
                            <div className="flex items-center">
                                <div className="w-10 h-10 mr-4">
                                    <Image src="/apple.jpg" alt="Example" className="rounded-full w-8 h-8 ml-4" width={8} height={8}  />
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-medium m-2">Mia's Macbook Pro</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 ml-20">Ninh Binh, Vietnam</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-red-500 mr-4">●</span>
                                <span className="text-gray-500">Current session</span>
                            </div>
                            <div>
                                <svg className="w-6 h-5 mr-3 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>

                            </div>
                        </div>





                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mainscreen