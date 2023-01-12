import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase";

import { useRouter } from "next/router";

export const AuthContext = createContext();
export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState({});

  //   const logIn = (email, password) => {

  //   };
  //   const register = (email, password) => {

  //   };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
