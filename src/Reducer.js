export const initialState={
    basket: [],
};

//Selector very imp!
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };

            case "REMOVE_FROM_BASKET":
                let newBasket=[...state.basket];
                return {
                    ...state,
                    basket:newBasket.filter((element,key)=>{
                        return key!==action.id;
                    })
                } 



        default:
            return state;
    }
};

export default reducer;