const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                nameAlert: '',
            };

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };

        case 'ADD_TO_BASKET':
            const indexItem = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );

            let newOrder = null;

            if (indexItem < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };

                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === indexItem) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                nameAlert: payload.title,
            };
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                }),
            };
        case 'DEC_QUANTITY':
            const newOrderDec = state.order.map((orderItem) => {
                if (orderItem.id === payload.id) {
                    const newQuantity = orderItem.quantity - 1;
                    return {
                        ...orderItem,
                        quantity: newQuantity > 0 ? newQuantity : 0,
                    };
                } else {
                    return orderItem;
                }
            });
            const newOrderAfterFilter = newOrderDec.filter(
                (item) => item.quantity !== 0
            );

            return {
                ...state,
                order: newOrderAfterFilter,
            };
        case 'BASKET_SHOW':
            return {
                ...state,
                isShowBasket: !state.isShowBasket,
            };
        case 'ADD_PROD_TO_BASKET':
            const productItem = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );

            let newOrderProd = null;

            if (productItem < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };

                newOrderProd = [...state.order, newItem];
            } else {
                newOrderProd = state.order.map((orderItem, index) => {
                    if (index === productItem) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrderProd,
                nameAlert: payload.title,
            };

        default:
            return state;
    }
};

export { reducer };
