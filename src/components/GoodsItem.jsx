import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const {
        id,
        title,
        price,
        description,
        image
    } = props;

    const {addProdToBasket} = useContext(ShopContext)

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={title} />
            </div>
            <div className='card-content'>
                <span className='card-name'>{title}</span>
                <p>{description.slice(0, 60)}...</p>
            </div>
            <div className='card-link-wrap'>
                <Link to={`/product/${id}`} className='card-link'>
                    Подробнее
                </Link>
            </div>
            <div className='card-action'>
                <span className='price'>{price}$</span>
                <button
                    className='btn purple darken-1 card-btn'
                    onClick={() => addProdToBasket({ id, title, price })}
                >
                    Купить
                </button>
            </div>
        </div>
    );
}

export { GoodsItem };
