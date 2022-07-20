import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const { id, title, price, quantity } = props;
    const cost = Math.floor(price * quantity * 100) / 100;

    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);
    return (
        <li className='collection-item'>
            <span className='collection-item__title'>
                {' '}
                {title.slice(0, 30)}...
            </span>
            x
            <span className='btn-add' onClick={() => incQuantity(id)}>
                <i className='material-icons'>add</i>
            </span>
            {quantity}
            <span className='btn-remove' onClick={() => decQuantity(id)}>
                <i className='material-icons'>remove</i>
            </span>
            = {cost}$.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close </i>
            </span>
        </li>
    );
}

export { BasketItem };
