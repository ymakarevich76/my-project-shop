import { useEffect } from 'react';

import { getAllGoods } from '../api';

import { GoodsList } from '../components/GoodsList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

import { useContext } from 'react';
import { ShopContext } from '../context';

function Home() {
    const { goods, setGoods } = useContext(ShopContext);
  
    useEffect(() => {
        getAllGoods().then((data) => {
            setGoods(data);
        });

        return () => {
        }

        // eslint-disable-next-line
    }, [goods]);
    return (
        <>
            <Search/>
            {!goods.length ? <Preloader /> : <GoodsList />}
        </>
    );
}

export { Home };
