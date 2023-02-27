import React, { createContext, useContext } from 'react';
import { useInsiteReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const DashboardProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useInsiteReducer({
    notes: [],
    sites: [],
    users: [],
    comments: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useInisteContext = () => {
  return useContext(useInisteContext);
};

export { DashboardProvider, useInisteContext };
