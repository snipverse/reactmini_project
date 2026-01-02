export const loginUser = () => {
  return localStorage.setItem("isAuth", "true");
}

export const logoutUser = () => {
  return localStorage.removeItem("isAuth");
}

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
}