import { useEffect, useState } from 'react';
import { getOnlyGood } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { Preloader } from '../components/Preloader';

import { useContext } from 'react';
import { ShopContext } from '../context';

function Product() {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    const { addProdToBasket } = useContext(ShopContext);

    id = Number(id);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getOnlyGood(id).then((data) => {
            setProduct(data);
        });
    }, [id]);

    const { title, price, category, image, description, rating } = product;

    return (
        <>
            {!product.id ? (
                <Preloader />
            ) : (
                <div className='product'>
                    <div className='product__wrap-img'>
                        <img src={image} alt={title} className='product__img' />
                    </div>
                    <div className='product__descr'>
                        <h1>{title}</h1>

                        <p>Rating: {rating.rate}</p>
                        <span>Category: {category}</span>
                        <p>{description}</p>
                        <p className='price'>Price: {price}$</p>

                        <button
                            className='btn purple darken-1 card-btn'
                            onClick={() =>
                                addProdToBasket({id, title, price})
                            }
                        >
                            Купить
                        </button>
                    </div>
                </div>
            )}

            <button onClick={goBack} className='btn purple darken-1'>
                Go back
            </button>
        </>
    );
}

export { Product };
