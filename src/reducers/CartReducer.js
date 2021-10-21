const initialState = {
  products:[],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  let products = [...state.products];
  switch(action.type) {
    case 'ADD_PRODUCT':
      let id = action.payload.data.id;

      let index = products.findIndex(item => item.id === id);

      if (index > -1) {
        products[index].qt += action.payload.quantity;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.quantity
        })
      }
      return {...state, products};
      break;
      case 'CHANGE_PRODUCT': 
        let idProduct = action.payload.key;

        let indexProduct = products.findIndex(item => item.id === idProduct);

        switch(action.payload.type) {
          case '-':
            if (indexProduct > -1) {
              products[indexProduct].qt--;
            }

            if(products[indexProduct].qt <= 0) {
              products = products.filter(product => product.id !== idProduct);
            }
            break;  
          case '+':
            if (indexProduct > -1) {
              products[indexProduct].qt++;
            }
            break;
          default:
            return null;
        }

      return {...state, products};
    default:
      return state;
      // case 'SET_TOKEN':
      //     return {...state, token: action.payload.token};
      // case 'SET_NAME':
      //     return {...state, name: action.payload.name};
      // default: 
      //     return state;
  }
}