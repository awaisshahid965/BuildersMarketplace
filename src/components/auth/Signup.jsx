import React, { useRef, useState } from "react";
import Button from "../../shared/ui/button/Button";

function Signup({ onCreateUserAccount }) {
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
    await onCreateUserAccount(email, password, resetForm);
  };
  return (
    <form ref={signupForm} className="auth_form" onSubmit={onSubmit}>
      <input type="text" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="password" />
      <Button
        disabled={submitting}
        text={submitting ? "Processing, Please Wait..." : "Sign Up"}
      />
    </form>
  );
}

export default Signup;
