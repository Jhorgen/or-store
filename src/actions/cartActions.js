import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SUB_SHIPPING, ADD_SHIPPING } from './action-types/cart-actions.js'

//add cart action
export const addToCart = (id) => {
  return{
    type: ADD_TO_CART,
    id
  }
}
//remove item action
export const removeItem = (id, price) => {
  return{
    type: REMOVE_ITEM,
    id,
    price
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
export const addQuantity = (id) => {
  return{
    type: ADD_QUANTITY,
    id
  }
}

export const addShipping=(id) => {
  return{
    type: ADD_SHIPPING,
    id
  }
}

export const subShipping = (id) => {
  return{
    type: SUB_SHIPPING,
    id
  }
}

export const requestItem = () => {
  return { type: 'REQUESTED_ITEM' }
};

export const requestItemSuccess = (data) => {
  return { type: 'REQUESTED_ITEM_SUCCEEDED', items: data}
};

export const requestItemError = (err) => {
  return { type: 'REQUESTED_ITEM_FAILED', payload: err }
};

export const sendStorageData = (userCart) => {
  return { type: 'SEND_STORAGE_DATA', addedItems: userCart }
}

export const loadItemDataCheck1 = (data, check) => {
  return { type: 'CHECK', items: data, addedItems: check}
}

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

export const loadItemDataCheck = (check) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/products`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(loadItemDataCheck1(data, check))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}
