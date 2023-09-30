import Cookies from "js-cookie";

const auth = {
  isAuthenticated: () => {
    return Cookies.get("token");
  },
  userAuthCredentials: (token) => {
    return Cookies.set("token", token);
  },

  logout: () => {
    Cookies.remove("token");
    window.location.href = "/login";
  },
};

export default auth;
