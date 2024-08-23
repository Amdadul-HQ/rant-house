'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SearchInputField from './SearchInputField';

const CategoryNav = () => {
    const pathName = usePathname();

    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"Tolet",
            path:"/tolet"
        },
        {
            title:"Bachelor",
            path:"/bachelor"
        },
        {
            title:"Travel",
            path:"/travel"
        },
        {
            title:"Sublet",
            path:"/sublet"
        },
        {
            title:"Hotel",
            path:"/hotel"
        },
        {
            title:"Hostel",
            path:"/hostel"
        },
        {
            title:"Office",
            path:"/office"
        },
        {
            title:"Shops",
            path:"/shop"
        },
    ]

    return (
        <nav className="grid grid-cols-4 max-w-screen-xl gap-x-4 mx-auto mt-4">
            <div className="col-span-1 py-4 px-5 bg-white rounded-md">
                
            </div>
            <div className="col-span-2 flex gap-x-4 bg-white px-5 py-4 items-center rounded-md justify-between">
                {
                    links.map((link,i)=> <Link href={link.path} className={`${pathName === link.path ? "text-black font-medium" : "hover:text-black text-gray-400 duration-300 transition-all"}`} key={i}>{link.title}</Link>)
                }
            </div>
            <div className="col-span-1 py-4 px-5 bg-white rounded-md">
                <SearchInputField/>
            </div>
        </nav>
    );
};

export default CategoryNav;