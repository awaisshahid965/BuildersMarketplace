import React, { useEffect } from "react";
import "./Auth.css";
import GoogleAuth from "../../components/auth/GoogleAuth";
import Login from "../../components/auth/Login";
import { useAuth } from "../../context/auth/AuthContext";
import { AuthModes } from "../../context/auth/AuthDefault";
import Signup from "../../components/auth/Signup";
import useBackToTop from "../../shared/hooks/useBackToTop";

function Auth() {
  const { mode, changeAuthMode, createAccount, login } = useAuth();
  const backToTop = useBackToTop();

  const AuthModeChange = () => {
    switch (mode) {
      case AuthModes.LOGIN:
        return (
          <p>
            Don't have an account,{" "}
            <button onClick={() => changeAuthMode(AuthModes.SIGNUP)}>
              Create One.
            </button>
          </p>
        );
      case AuthModes.SIGNUP:
        return (
          <p>
            Already have an account,{" "}
            <button onClick={() => changeAuthMode(AuthModes.LOGIN)}>
              Login Here.
            </button>
          </p>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    backToTop();
  }, [mode, backToTop]);

  const onCreateUserAccount = async (email, password, cb) => {
    await createAccount(email, password, cb);
  };
  const onUserLogin = async (email, password, cb) => {
    await login(email, password, cb);
  };

  const AuthScreen = Object.freeze({
    [AuthModes.LOGIN]: <Login onUserLogin={onUserLogin} />,
    [AuthModes.SIGNUP]: <Signup onCreateUserAccount={onCreateUserAccount} />,
  });

  return (
    <section className="section_auth">
      <div className="auth_wrap">
        <div className="auth_heading">
          Welcome to Clothify!
          <br />
          Please Login to continue...
        </div>
        {AuthScreen[mode]}
        <p>Or signin using</p>
        <GoogleAuth />
        <AuthModeChange />
      </div>
    </section>
  );
}

export default Auth;
