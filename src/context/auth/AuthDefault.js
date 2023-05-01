export const AuthModes = Object.freeze({
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
});

export const authDefault = {
  user: null,
  mode: AuthModes.LOGIN,
  isAuthenticated: false,
  changeAuthMode: () => {},
  createAccount: () => {},
  login: () => {},
  logout: () => {},
};
