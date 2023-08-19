// // AuthGuard.js
// import React, { useContext } from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const AuthGuard = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

// export default AuthGuard;
