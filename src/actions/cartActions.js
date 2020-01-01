import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SUB_SHIPPING, ADD_SHIPPING } from './action-types/cart-actions.js'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const addShipping=(id)=>{
    return{ 
        type: ADD_SHIPPING,
        id
    }
}

export const subShipping=(id)=>{
    return{
        type: SUB_SHIPPING,
        id
    }
}

export const requestItem = () => {
  return { type: 'REQUESTED_ITEM' }
};

export const requestItemSuccess = (data) => {
  return { type: 'REQUESTED_ITEM_SUCCEEDED', items: data }
};

const requestItemError = (err) => {
  return { type: 'REQUESTED_ITEM_FAILED', payload: err }
};

export const loadItemData = () => {
  return (dispatch) => {
    dispatch(requestItem());
    fetch(`http://localhost:3000/api/v1/products`)
      .then(res => res.json())
      .then(
        data => { console.log('data', data);
        dispatch(requestItemSuccess(data))},
        err => console.log('error', err),
        dispatch(requestItemError())
      );
  }
}


export const loadSelectedItemData = (category) => {
  return (dispatch) => {
    dispatch(requestItem());
    fetch(`http://localhost:3000/api/v1/products/?category=${category}`)
      .then(res => res.json())
      .then(
        data => { console.log('data', data);
        dispatch(requestItemSuccess(data))},
        err => console.log('error', err),
        dispatch(requestItemError())
      );
  }
}
