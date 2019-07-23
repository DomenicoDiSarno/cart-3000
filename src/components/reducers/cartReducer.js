import Item1 from '../../images/fikalah.jpg';
import Item2 from '../../images/leggins.jpg';
import Item3 from '../../images/maglia.jpg';
import Item4 from '../../images/scimmione.jpg';
import Item5 from '../../images/pantaloncini-mare.jpg';
import Item6 from '../../images/unicorni.jpg';

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {
            id:1,
            title:'Nice shorts',
            desc: "Lorem ipsum dolor sit amet...",
            price:30,
            img:Item1
        },
        {
            id:2,
            title:'Long nice shorts',
            desc: "Lorem ipsum dolor sit amet...",
            price:40,
            img: Item2},
        {
            id:3,
            title:'Pregnant but nice',
            desc: "Lorem ipsum dolor sit amet...",
            price:20,
            img: Item3
        },
        {
            id:4,
            title:'Kong of the beach',
            desc: "Lorem ipsum dolor sit amet...",
            price:40,
            img:Item4
        },
        {
            id:5,
            title:'Something different',
            desc: "Lorem ipsum dolor sit amet...",
            price:50,
            img: Item5
        },
        {
            id:6,
            title:'Believe',
            desc: "Lorem ipsum dolor sit amet...",
            price:10,
            img: Item6
        }
    ],
    addedItems:[],
    total: 0
};

const cartReducer= (state = initState,action)=>{
   
    //HOME
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id);
         let existed_item= state.addedItems.find(item=> action.id === item.id);

         if(existed_item)
         {
            addedItem.quantity += 1 ;
             alert('Item added to cart');

             return{
                ...state,
                 total: state.total + addedItem.price 
             }
        }
         else{
            addedItem.quantity = 1;
            alert('Item added to cart');

            let newTotal = state.total + addedItem.price;
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id);
        let new_items = state.addedItems.filter(item=> action.id !== item.id);

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //CART
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id);
        addedItem.quantity += 1 ;

        let newTotal = state.total + addedItem.price;

        return{
            ...state,
            total: newTotal
        }
    }

    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id);

        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id);
            let newTotal = state.total - addedItem.price;

            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;

            return{
                ...state,
                total: newTotal
            }
        }
        
    } else {
        return state;
    }
};

export default cartReducer;
