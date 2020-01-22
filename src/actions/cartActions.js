import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SUB_SHIPPING, ADD_SHIPPING } from './action-types/cart-actions.js'

//add cart action
export const addToCart = (id, selected, selectedIndex) => {
  return{
    type: ADD_TO_CART,
    id,
    selected,
    selectedIndex
  }
}
//remove item action
export const removeItem = (id, items) => {
  return{
    type: REMOVE_ITEM,
    id,
    items
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




// Cart / state management

export const correctTotalOnEmpty = () => {
  return { type: 'CORRECT_TOTAL', total: 0 }
}

export const requestItem = () => {
  return { type: 'REQUESTED_ITEM' }
};

export const requestItemSuccess = (data) => {
  return { type: 'REQUESTED_ITEM_SUCCEEDED', items: data, addedItems: [], total: 0}
};

export const requestItemError = (err) => {
  return { type: 'REQUESTED_ITEM_FAILED', payload: err }
};

export const loadItemDataCheck1 = (data, check, saveTotal) => {
  return { type: 'CHECK', items: data, addedItems: check, total: saveTotal}
}

export const saveSelectedItemDataShop = (data, saveCartFromShop, saveTotalFromShop) => {
  return { type: 'CHECK', items: data, addedItems: saveCartFromShop, total: saveTotalFromShop}
}

export const saveSelectedItemDataBrands = (data, saveCartFromBrands, saveTotalFromBrands) => {
  return { type: 'BRANDS', items: data, addedItems: saveCartFromBrands, total: saveTotalFromBrands}
}


export const loadItemData = () => {
  return (dispatch) => {
    dispatch(requestItem())
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

export const loadItemDataCheck = (check, saveTotal) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/products`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(loadItemDataCheck1(data, check, saveTotal))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}

export const loadSelectedItemData = (category) => {
  return (dispatch) => {
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


export const saveSelectedItemData = (category, saveCartFromShop, saveTotalFromShop) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/products/?category=${category}`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(saveSelectedItemDataShop(data, saveCartFromShop, saveTotalFromShop))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}

export const loadSelectedBrandData = (brand) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/products/?brand=${brand}`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(requestItemSuccess(data))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}


export const saveSelectedBrandData = (brand, saveCartFromBrands, saveTotalFromBrands) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/products/?brand=${brand}`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(saveSelectedItemDataShop(data, saveCartFromBrands, saveTotalFromBrands))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}
