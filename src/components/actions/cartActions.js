import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//ADD
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
};

//REMOVE
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
};

//LESS
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
};

//MORE
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
};
