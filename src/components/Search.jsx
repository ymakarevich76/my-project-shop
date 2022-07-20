import { useState } from 'react';

function Search(props) {
    const { goods, setGoods } = props;

    const [category, setCategory] = useState('all');

    const handleRadioBtn = (e) => {
        setCategory(e.target.dataset.category);
        const newArr = goods.filter(
            (item) =>
                item.category === e.target.dataset.category ||
                item.category.includes('clothing') === e.target.dataset.category
        );
        console.log(newArr);
        setGoods(newArr);
    };

    return (
        <div className='filter-btn'>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category='all'
                    onChange={handleRadioBtn}
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
                />
                <span>Jewelery</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='group3'
                    type='radio'
                    data-category='clothing'
                    onChange={handleRadioBtn}
                />
                <span>Clothing</span>
            </label>
        </div>
    );
}

export { Search };
