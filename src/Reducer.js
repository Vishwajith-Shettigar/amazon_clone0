export const initialState={
    basket:[],

    user:null



};

export const baskettotal =(basket)=>
basket?.reduce((amount,item)=>item.price + amount ,0);


 const Reducer=(state,action)=>{

    console.log(action)
     switch(action.type){


case "SET_USER":

return {
    ...state,
    user:action.user
}

        case 'ADD_TO_BASKET':
            // logic for ading item to basket
            
            return {
                ...state,
                basket:[...state.basket,action.item]

            }


            break;

         case "REMOVE_FROM_BASKET":
             // REMOVE FROM BASKET
            
            

      let newbasket=[...state.basket]

       const index=state.basket.findIndex((basketItem)=> basketItem.id===action.id)


       if (index>=0)
       {
           // item exists remove it
  newbasket.splice(index,1);
  
       }

       return {...state,
        basket:newbasket,
       };


            
             

             
             break;


        
            default:
                return state
            

     }
 }

 export default Reducer;
