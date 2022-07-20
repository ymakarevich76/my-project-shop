import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { nameAlert: name = '', closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export { Alert };
