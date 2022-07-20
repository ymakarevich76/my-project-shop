import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
    const initialState = {
        goods: [],
        order: [],
        isShowBasket: false,
        nameAlert: '',
        category: 'all',
    };
    const [value, dispatch] = useReducer(reducer, initialState);

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    };

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.incQuantity = (itemId) => {
        dispatch({type: 'INC_QUANTITY', payload: {id: itemId}})
    }

    value.decQuantity = (itemId) => {
        dispatch({type: 'DEC_QUANTITY', payload: {id: itemId}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'BASKET_SHOW'})
    }

    value.addProdToBasket = (item) => {
        dispatch({type: 'ADD_PROD_TO_BASKET', payload: item})
    }
    value.handleRadioBtn = (e) => {
        dispatch({type: 'RADIO_BTN', payload: e})
    } 
    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
