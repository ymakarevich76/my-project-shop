import { GoodsItem } from './GoodsItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsList() {
    const { goods = []} = useContext(ShopContext);

    return (
        <div className='list'>
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item}/>
            ))}
        </div>
    );

}

export { GoodsList };
