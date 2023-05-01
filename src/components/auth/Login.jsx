import React, { useRef, useState } from "react";
import Button from "../../shared/ui/button/Button";

function Login({ onUserLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const signupForm = useRef();
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    signupForm.current && signupForm.current.reset();
    setSubmitting(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!emailRef.current && !passwordRef.current) {
      return;
    }
    setSubmitting(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await onUserLogin(email, password, resetForm);
  };

  return (
    <form className="auth_form" onSubmit={onSubmit}>
      <input ref={emailRef} type="text" name="email" placeholder="Email" />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="password"
      />
      <Button
        disabled={submitting}
        text={submitting ? "Processing, Please Wait..." : "Login"}
      />
    </form>
  );
}

export default Login;
