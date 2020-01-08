import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from './../actions/action-types/cart-actions.js'

const initState = {
  items: [],
  addedItems: [],
  total: 0,
  loading: false,
  error: false,
}


const cartReducer = (state = initState, action) => {

  switch (action.type) {
    case 'REQUESTED_ITEM':
    return {
      ...state,
      loading: true,
      error: false,
    };
    case 'REQUESTED_ITEM_SUCCEEDED':
    return {
      ...state,
      items: action.items,
      loading: false,
      error: false,
      addedItems:action.addedItems,
      total: action.total
    };
    case 'REQUESTED_ITEM_FAILED':
    return {
      ...state,
      loading: false,
      error: true,
    };
    case 'CHECK':
    return {
      ...state,
      items: action.items,
      loading: false,
      error: false,
      addedItems: action.addedItems,
      total: action.total

    }
    case 'SHOP_CHECK':
    return {
      ...state,
      items: action.items,
      loading: false,
      error: false,
      addedItems: action.addedItems,
      total: action.total
    }
    case 'BRANDS':
    return {
      ...state,
      items: action.items,
      loading: false,
      error: false,
      addedItems: action.addedItems,
      total: action.total
    }

    case 'CORRECT_TOTAL':
    return {
      ...state,
      total: action.total
    }
  }

  if(action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id)
    let existed_item = state.addedItems.find(item => action.id === item.id)

    if(existed_item)
    {
      addedItem.checkoutquantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    }
    else {
      addedItem.checkoutquantity = 1;
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total : newTotal
      }
    }
  }

  if(action.type === REMOVE_ITEM) {
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)

    let newTotal
    action.items.length === 1 ? newTotal = 0 : newTotal = state.total - (itemToRemove.price * itemToRemove.checkoutquantity )

    return {
      ...state,
      addedItems: new_items,
      total: newTotal <= 0 ? Math.round(newTotal) : newTotal
    }
  }

  if(action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item=> item.id === action.id)
    let newTotal = state.total + addedItem.price

    const updatedItems = state.addedItems.map(item =>
      item.id === action.id ? { ...item, checkoutquantity: item.checkoutquantity += 1 } : item
    );

    return {
      ...state,
      addedItems: updatedItems,
      total: newTotal
    }
  }

  if(action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item=> item.id === action.id)

    const updatedItems = state.addedItems.map(item =>
      item.id === action.id ? { ...item, checkoutquantity: item.checkoutquantity -= 1 } : item
    );

    let newTotal = state.total - addedItem.price

    return {
      ...state,
      addedItems: updatedItems,
      total: newTotal
    }
  }

  if(action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 5
    }
  }

  if(action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - 5
    }
  }

  else {
    return state
  }

}


export default cartReducer;
