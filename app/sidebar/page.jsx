"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { usePathname } from 'next/navigation'; 

const sidebar = () => {

    const router= useRouter();
    const pathname = usePathname();

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'All files', path: '/files' },
        { name: 'Private files', path: '/private' },
        { name: 'Shared with me', path: '/shared' },
        { name: 'Deleted files', path: '/deleted' },
        { name: 'Design', path: '/design' },
        { name: 'Notifications', path: '/notifications' },
        { name: 'Settings', path: '/settings' }
      ];

  return (
    <div className="w-64 bg-gray-900  h-screen p-5 text-white" >
    <div className="mb-5">
      <div className="text-2xl">Untitled UI</div>
    </div>
    <nav>
      <ul>
      {menuItems.map((item)=>(
          <li key={item.name} className={`mb-3 ${pathname === item.path ? 'font-bold' : ''}`}>
            <Link href={item.path}>
              {item.name}
            </Link>
          </li>
      ))}

      </ul>
    </nav>
    
  </div> 
   )
}

export default sidebar