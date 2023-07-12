import { createContext, useEffect, useState } from "react";
import {
  LoginRequest,
  getUserLocalStorage,
  setUserLocalStorage,
} from "./utils";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(server, username, password) {
    const response = await LoginRequest(server, username, password);

    const payload = { token: response.token, username };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
