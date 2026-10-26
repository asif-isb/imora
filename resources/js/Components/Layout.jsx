import React, { useEffect, useState } from 'react';

// import Components
import TopBar from './TopBar';
import Header from './Header';
///import NavigationBar from './NavigationBar';
import Footer from './Footer';

import { Toaster } from 'sonner';

const Layout = ({ children }) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('/menus-json')
            .then(res => res.json())
            .then(data => {
                const updatedMenus = data.map(menu => {
                    if (menu.title === 'Services') {
                        return { ...menu, title: 'Products', link: '/products-list', children: [] };
                    }
                    return menu;
                });
                setMenus(updatedMenus);
            });
    }, []);

    return (
        <>
            <Toaster position="top-center" richColors />

            <TopBar />
            <Header menus={menus} />
            {/*<NavigationBar menus={menus} />*/}
            <main className='container-fluid'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
