import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

import { useContext } from 'react';
import { ShopContext } from '../context';

function Layout() {
    const { isShowBasket, nameAlert } = useContext(ShopContext);
    return (
        <>
            <Header />
            <Cart />
            {isShowBasket && <BasketList />}
            {
                nameAlert && <Alert />
            }
            <div className='container content'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export { Layout };
