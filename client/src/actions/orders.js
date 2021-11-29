import * as api from '../api';

// Action Creators
export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();

    dispatch({ type: 'ORDERS/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrder = (newOrder) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(newOrder);

    console.log(data);

    dispatch({ type: 'ORDERS/CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrderStatus = (id, isPaid) => async (dispatch) => {
  try {
    const message = await api.updateOrderPaymentStatus(id, isPaid);
    console.log(message)
  } catch (error) {
    console.log(error.message)
  }
}


// export const updateStatus = async (id, status) => {
//   try {
//     const message = await api.updateTableStatus(id, status);
//     console.log(message);
//   } catch (error) {
//     console.log(error.message);
//   }
// };