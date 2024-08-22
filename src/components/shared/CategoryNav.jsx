const CategoryNav = () => {

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
            title:"Shop",
            path:"/shop"
        },
    ]

    return (
        <nav className="grid grid-cols-4 max-w-screen-xl gap-x-4 mx-auto mt-4">
            <div className="col-span-1 py-4 px-5 bg-white rounded-md"></div>
            <div className="col-span-2 flex gap-x-4 bg-white px-5 py-4 rounded-md justify-between">
                {
                    links.map((link,i)=> <button key={i}>{link.title}</button>)
                }
            </div>
            <div className="col-span-1 py-4 px-5 bg-white rounded-md"></div>
        </nav>
    );
};

export default CategoryNav;