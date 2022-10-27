import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, changeTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  const continueWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsrbscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("The is info is here : ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsrbscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        theme,
        changeTheme,
        continueWithProvider,
        createUser,
        updateUserInfo,
        logIn,
        logOut,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
