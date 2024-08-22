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
            <nav className="max-w-screen-xl mx-auto py-4">
                <h1>
                    BASA BARA
                </h1>
                <div>
                    
                </div>
            </nav>
        </section>
    );
};

export default Navbar;