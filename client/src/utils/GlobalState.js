import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const DashboardProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    notes: [],
    sites: [],
    users: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { DashboardProvider, useStoreContext };
