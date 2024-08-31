import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  // This line sets the default Authorization header for all Axios requests using the token stored in the 
  // auth state.This ensures that every request made by Axios will include the token if it exists.
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };



// The AuthProvider component manages and provides the authentication state(user and token) throughout the
// application.
// It automatically retrieves and stores this data in localStorage to persist the user's session.
// It also sets up Axios to include the authentication token in every request.
// The useAuth hook is a convenient way to access this authentication data from any component, making it
// easier to manage user authentication in the app.