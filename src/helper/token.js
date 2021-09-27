import jwtDecode from "jwt-decode";

export const getToken = () => {
  try {
    let token = localStorage.getItem("token");
    const { exp } = jwtDecode(token);
    const expirationTime = exp * 1000;
    if (Date.now() > expirationTime) {
      token = null;
      localStorage.clear();
    }
    return token;
  } catch (e) {
    return null;
  }
};
