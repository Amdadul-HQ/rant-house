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
            <nav className="max-w-screen-xl mx-auto py-4 flex justify-between">
                <h1>
                    BASA BARA
                </h1>
                <div>
                    <Button text={'Contact'} className={'bg-black text-white'}/>
                    
                </div>
            </nav>
        </section>
    );
};

export default Navbar;