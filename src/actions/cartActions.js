import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SUB_SHIPPING, ADD_SHIPPING } from './action-types/cart-actions.js'

//add cart action
export const addToCart = (id, selected, selectedIndex, price) => {
  return{
    type: ADD_TO_CART,
    id,
    selected,
    selectedIndex,
    price
  }
}
//remove item action
export const removeItem = (id, items, selectedIndex) => {
  return{
    type: REMOVE_ITEM,
    id,
    items,
    selectedIndex
  }
}

export const subtractQuantity = (id, selectedIndex) => {
  return{
    type: SUB_QUANTITY,
    id,
    selectedIndex
  }
}

export const addQuantity = (id, selectedIndex) => {
  return{
    type: ADD_QUANTITY,
    id,
    selectedIndex
  }
}

export const checkout = (items) => {
  return {
    type: 'CHECKOUT_COMPLETE',
    items
  }
}

export const viewItem = (item) => {
  return {
    type: 'VIEW_ITEM',
    item
  }
}

export const saveCartItemTotal = () => {
  return {
    type: 'UPDATE_CART'
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
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products`)
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
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products`)
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
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?category=${category}`)
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
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?category=${category}`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(saveSelectedItemDataShop(data, saveCartFromShop, saveTotalFromShop))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}

export const loadBrandData = (brand) => {
  return (dispatch) => {
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?brand=${brand}`)
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
    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?brand=${brand}`)
    .then(res => res.json())
    .then(
      data => { console.log('data', data);
      dispatch(saveSelectedItemDataShop(data, saveCartFromBrands, saveTotalFromBrands))},
      err => console.log('error', err),
      dispatch(requestItemError())
    );
  }
}
