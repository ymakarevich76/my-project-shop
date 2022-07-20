import { useContext } from 'react';
import { ShopContext } from '../context';

function Search() {

    const { handleRadioBtn, category } = useContext(ShopContext);

    return (
        <div className='filter-btn'>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category='all'
                    onChange={handleRadioBtn}
                    checked={category === 'all'}
                />
                <span>All</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category='electronics'
                    onChange={handleRadioBtn}
                    checked={category === 'electronics'}
                />
                <span>Electronics</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category='jewelery'
                    onChange={handleRadioBtn}
                    checked={category === 'jewelery'}
                />
                <span>Jewelery</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category="men's clothing"
                    onChange={handleRadioBtn}
                    checked={category === "men's clothing"}
                />
                <span>Men's clothing</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category="women's clothing"
                    onChange={handleRadioBtn}
                    checked={category === "women's clothing"}
                />
                <span>Women's clothing</span>
            </label>
        </div>
    );
}

export { Search };
