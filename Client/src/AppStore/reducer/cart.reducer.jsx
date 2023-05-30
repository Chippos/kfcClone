const initialState = {
  data: null,
  isLoading: true,
  error: null,
  addedItems: [],
  quantity: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
     {
      if (state.addedItems.length === 0) {
        return {
          ...state,
          data: payload,
          addedItems: [...state.addedItems, { ...payload, quantity: 1 }],
          isLoading: false,
          quantity: (state.quantity += 1),
        };
      } else if (state.addedItems.length > 0) {
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(
          (item) => payload._id === item._id
        );
        if (existed_item) {
          existed_item.quantity += 1;
          return {
            ...state,
            data: payload,
            addedItems: [...state.addedItems],
            isLoading: false,
          };
        } else {
          return {
            ...state,
            data: payload,
            addedItems: [...state.addedItems, { ...payload, quantity: 1 }],
            isLoading: false,
            quantity: (state.quantity += 1),
          };
        }
      }
     }
     break;
    case "ADD_CART_INC":
      {
        let existed_item = state.addedItems.find(
          (item) => payload._id === item._id
        );
        if (existed_item) {
          existed_item.quantity += 1;
          return {
            ...state,
            data: payload,
            addedItems: [...state.addedItems],
            isLoading: false,
          };
        } else {
          return {
            ...state,
          };
        }
      }
      break;
    case "ADD_CART_DEC":
      {
        let existed_item = state.addedItems.find(
          (item) => payload._id === item._id
        );
        if (existed_item) {
          existed_item.quantity -= 1;
          return {
            ...state,
            data: payload,
            addedItems: [...state.addedItems],
            isLoading: false,
          };
        } else {
          return {
            ...state,
          };
        }
      }
      break;
      case "ADD_CART_DEL":
      {
        let existed_item = state.addedItems.filter(
          (item) => payload._id !== item._id
        );
        console.log(existed_item)
        return {
          ...state,
          data: payload,
          addedItems: [...existed_item],
          isLoading: false,
          quantity: (state.quantity-=1),
        };
      }
    default:
      return state;
  }
}
