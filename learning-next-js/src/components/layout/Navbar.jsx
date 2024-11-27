'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'


const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    { title: 'Profile', path: '/profile' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Category', path: '/categorys' },
  ];

  const getClassName = (path) => {
    return path === pathName
      ? 'font-semibold	cursor-pointer text-cyan-950 hover:text-orange-500 duration-300'
      : 'font-semibold	cursor-pointer text-cyan-600 hover:text-orange-500 duration-300'
  };

  const handleClickNavigate = () => {
    router.push('/log-in');
  };

  if(pathName.includes('dashboard')) return (<nav className="bg-red-700 py-3 px-2 flex justify-between items-center"><span>Admin Dashboard</span></nav>)

  return (
    <nav className='bg-amber-100 py-3 px-2 flex justify-between items-center'>
      <Link href={'/'} className='font-medium text-gray-500'>Learning <span className='text-green-900'>Next.js</span></Link>
      <ul className='flex justify-between gap-2 items-center'>
        {
          links?.map((item) => {
            return <li key={item.path} className={getClassName(item.path)} >
              <Link href={item.path}>{item.title}</Link>
            </li>
          })
        }
      </ul>
      <button onClick={handleClickNavigate} className='bg-orange-600 px-2 py-1 text-cyan-100 font-medium cursor-pointer rounded'>Log in</button>
    </nav>
  )
}

export default Navbar