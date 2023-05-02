import React, { useEffect, useState } from "react";
import { AuthModes, authDefault } from "./AuthDefault";
import { AuthProvider } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase";
import { signin, signout, signup } from "./AuthServices";

function AuthContainer({ children }) {
  const [state, setState] = useState(authDefault);
  const navigate = useNavigate();

  const setUser = (user) => {
    setState((prev) => {
      return {
        ...prev,
        isAuthenticated: !!user,
        user,
        mode: AuthModes.LOGIN,
      };
    });
  };

  useEffect(() => {
    const listener = getAuth(app).onAuthStateChanged((authUser) => {
      if (!authUser) {
        navigate("/auth");
      } else {
        setUser({
          email: authUser.email,
          uid: authUser.uid,
        });
        navigate("/");
      }
    });
    return () => {
      // call to unsubscribe observer
      listener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeAuthMode = (mode) => {
    setState((prev) => {
      return {
        ...prev,
        mode,
      };
    });
  };

  const createAccount = async (email, password, cb) => {
    try {
      await signup(email, password);
      console.log(2332323);
    } catch (err) {
      console.log("signup failed", { err });
      cb();
    }
  };

  const login = async (email, password, cb) => {
    try {
      await signin(email, password);
      navigate("/");
    } catch (err) {
      console.log("login failed", err);
      cb();
    }
  };

  const logout = async () => {
    try {
      await signout();
      setUser(null);
    } catch (err) {
      console.log("logout failed", err);
    }
  };

  return (
    <AuthProvider
      value={{
        ...state,
        changeAuthMode,
        createAccount,
        login,
        logout,
      }}
    >
      {children}
    </AuthProvider>
  );
}

export default AuthContainer;
