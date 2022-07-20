import { BasketItem } from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketList() {
    const { handleBasketShow, order = [] } = useContext(ShopContext);
    const totalPrice = order.reduce((sum, el) => {
        const total = sum + el.price * el.quantity;
        return Math.floor(total * 100) / 100;
    }, 0);
    return (
        <div className='collection basket-list'>
            <li className='collection-item active purple darken-4'>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className='collection-item'>Ваша корзина пуста</li>
            )}
            <button className='basket-close' onClick={handleBasketShow}>
                <i className='material-icons'>clear</i>
            </button>

            <li className='collection-item active purple darken-4'>
                Общая стоимость: {totalPrice}$.
            </li>
        </div>
    );
}

export { BasketList };
