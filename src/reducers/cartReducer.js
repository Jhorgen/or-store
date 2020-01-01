import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from './../actions/action-types/cart-actions.js'

const initState = {
    items: [],
    addedItems:[],
    total: 0,
    loading: false,
    error: false
}


const cartReducer = (state = initState, action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item => item.id === action.id)
         let existed_item = state.addedItems.find(item => action.id === item.id)
         if(existed_item)
         {
            addedItem.checkoutquantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.checkoutquantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.checkoutquantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.checkoutquantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.checkoutquantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.checkoutquantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }

    if(action.type === ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type === SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 6
        }
  }

    switch (action.type) {
      case 'REQUESTED_ITEM':
        return {
          items: '',
          loading: true,
          error: false,
        };
      case 'REQUESTED_ITEM_SUCCEEDED':
        return {
          items: action.items,
          loading: false,
          error: false,
        };
      case 'REQUESTED_ITEM_FAILED':
        return {
          items: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
}


export default cartReducer;
