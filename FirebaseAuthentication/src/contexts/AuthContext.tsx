import React, { useEffect, useState } from "react";
import {
  fbLogin,
  fbLogout,
  fbRegister,
  initFirebase,
} from "../services/firebaseService";
interface IAuthContext {
  isUserSignedIn: boolean;
  register: (
    firstName: string,
    lastName: string,
    userName: string,
    password: string
  ) => void;
  login: (userName: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<IAuthContext | undefined>(
  undefined
);

export const AuthContextProvider: React.FC = (props) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    initFirebase((result) => setIsUserSignedIn(result));
  }, []);

  const login = async (userName: string, password: string) => {
    const userCredentials = await fbLogin(userName, password);
    if (userCredentials) {
    } else {
      alert("Wrong username/password");
    }
  };

  const register = async (
    firstName: string,
    lastName: string,
    userName: string,
    password: string
  ) => {
    await fbRegister(firstName, lastName, userName, password);
  };

  const logout = () => {
    fbLogout();
  };
  return (
    <AuthContext.Provider value={{ isUserSignedIn, register, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
