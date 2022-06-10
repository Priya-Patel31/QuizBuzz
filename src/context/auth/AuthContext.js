import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { loginApi, signupApi } from "../../services/authServices";
import { reducer } from "./AuthReducer";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) ?? {};
  const intialState = user ?? {
    isUserloggedIn: false,
    token: "",
    user: null,
  };
  const [{ isUserloggedIn, token }, dispatch] = useReducer(
    reducer,
    intialState
  );
  const signup = async ({ email, password, firstName, lastName }) => {
    const { data, success } = await signupApi({
      firstName,
      lastName,
      email,
      password,
    });

    if (success) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          isUserloggedIn: true,
          token: data.encodedToken,
          user: data.createdUser,
        },
      });
      toast.success("Signed up Successfully !!")
      return true;
    }
    toast.error("User already exists");
    return false;
  };
  

  const login = async ({ email, password }) => {
    const { data, success } = await loginApi({ email, password });
    if (success) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          isUserloggedIn: true,
          token: data.encodedToken,
          user: data.foundUser,
        },
      });
      toast.success("Login successful")
      return true;
    }
    toast.error("Wrong credentials");
    return false;
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
    toast.success("Logged out !!")
  };
  return (
    <AuthContext.Provider
      value={{ isUserloggedIn, token, signup, login, logout ,user}}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};
export { useAuth, AuthContextProvider };
