import React, {createContext, useState, useContext} from "react";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

export default function ProvideAuth(props) {
  const [user, setUser] = useState(
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null
  );

  // update login info in session storage
  const login = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  // clear session storage data
  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    window.location.reload();
  };

  // return current user data
  const getCurrentUser = () => {
    return user;
  };

  // login check
  const isAuthenticated = () => {
    return user?.token ? true : false;
  };

  // return current user token
  const getAuthenticationToken = () => {
    return user?.token ? user?.token : null;
  };

  return (
    <authContext.Provider
      value={{
        login,
        logout,
        getCurrentUser,
        isAuthenticated,
        getAuthenticationToken,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}
