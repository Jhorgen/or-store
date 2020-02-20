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
    let existed_item = state.addedItems.find(item => item.selectedOptionIndex == action.selectedIndex && item.id === action.id)
    const updatedItems = state.addedItems.map(item =>
      item.selectedOptionIndex == action.selectedIndex && item.id === action.id ? { ...item, checkoutquantity: existed_item.checkoutquantity += 1 } : item
    );

    if(existed_item)

    {
      console.log('existing', existed_item);
        return {
          ...state,
          total: state.total + existed_item.price,
          addedItems: updatedItems

        }
    }

    else {
      let addedItem = state.items.find(item => item.id === action.id)
      console.log(addedItem);
      addedItem.price = action.price
      addedItem.checkoutquantity = 1;
      addedItem.selectedOptionIndex = action.selectedIndex;
      addedItem.selectedoption = action.selected;
      console.log(addedItem.selectedoption);
      console.log('new item', addedItem);
      state.addedItems.push(addedItem)
      const updatedItems = state.addedItems.map(item =>
        item.selectedOptionIndex == action.selectedIndex && item.id === action.id ? { ...item } : item
      );
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: updatedItems,
        total: newTotal
      }
    }
  }

  if(action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item=> item.selectedOptionIndex === action.selectedIndex && action.id === item.id)
    console.log(itemToRemove);
    console.log(action.selectedIndex);

    let new_items = state.addedItems.filter(item=> item !== itemToRemove)
    console.log(new_items);

    let newTotal
    action.items.length === 1 ? newTotal = 0 : newTotal = state.total - (itemToRemove.price * itemToRemove.checkoutquantity )

    return {
      ...state,
      addedItems: new_items,
      total: newTotal <= 0 ? Math.round(newTotal) : newTotal
    }
  }

  if(action.type === ADD_QUANTITY) {
    let addedItem = state.addedItems.find(item=> item.id === action.id)
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
    let addedItem = state.addedItems.find(item=> item.id === action.id)

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
