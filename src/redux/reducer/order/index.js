const stateOrders = {
  orders: [],
};

const orders = (state = stateOrders, action) => {
  if (action.type === "GET_ORDERS") {
    return {
      ...state,
      orders: action.payload,
    };
  }

  return state;
};

export { orders };
