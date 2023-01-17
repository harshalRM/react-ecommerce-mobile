const CartReducer = (state,action) => {

    if(action.type === "ADD_TO_CART"){
       let {id,color,product,productquantity} = action.payload;
       let cartProduct;
       let total__price = product.price * productquantity
   
       cartProduct ={
           id,
           title:product.title,
           price:product.price,
           color,
           image:product.image,
           productquantity,
           rate:total__price,
       };
   
       return{
           ...state,
           cart : [...state.cart, cartProduct],
       }
    }
   
    if (action.type === "REMOVE_ITEM") {
       // eslint-disable-next-line
       let updateCart = state.cart.filter((curItem) => curItem.id != action.payload);
       return{
           ...state,
           cart: updateCart,
       }
    }
   
    
   
     return state
   }
   
   export default CartReducer