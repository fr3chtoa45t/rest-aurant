// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';
import { getOrders } from './actions/orders';
import { getTables } from './actions/tables';

// Components
import ItemList from './components/ItemList';
import OrderList from './components/OrderList';
import TableList from './components/TableList';
import ItemForm from './components/ItemForm';

const App = () => {

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    dispatch(getTables());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
      <div>
        <h1>Items</h1>
        <ItemList />
      </div>
      <div>
        <h1>Orders</h1>
        <OrderList />
      </div>
      <div>
        <h1>Tables</h1>
        <TableList />
      </div>
      <div>
        <ItemForm />
      </div>
    </div>
  );
};

export default App;