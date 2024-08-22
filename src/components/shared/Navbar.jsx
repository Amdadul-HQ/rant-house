import Button from "@/components/Button";

const Navbar = () => {
    const links = [
        {
            path:'/',
            title: 'HOME',
        },
        {
            path:'/tolet',
            title: 'TOLET',
        },
        {
            path:'/Buydream',
            title: 'BUY DREAM',
        },
        {
            path:'/booking',
            title:'HOTEL',
        },
        {
            path:'/about',
            title: 'About',
        }
    ]
    return (
        <section>
            <nav className="max-w-screen-xl mx-auto py-4 flex justify-between bg-white px-7 mt-4 rounded-xl items-center shadow-slate-200 shadow-[0px_0px_10px]">
                <h1 className="text-3xl font-semibold">
                    BASA BARA
                </h1>
                <div className="flex gap-x-2">
                    <Button text={'Contact'} className={'bg-black text-white border-2 border-black'}/>
                    <Button text={'Loging'} className={'bg-white border-2 border-black text-black'}/>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;