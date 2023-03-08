// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';

// export const UserContext = React.createContext();

// const UserProvider = (props) => {
//   const { loading, data } = useQuery(QUERY_USER);
//   const user = data.user || [];
//   const [currentUser, setCurrentUser] = useState(user);
//   console.log(user, 'global user context');

//   return (
//     <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
//   );
// };

// export default UserProvider;
