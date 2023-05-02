import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthenticated) {
        return navigate("/auth");
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated && <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
