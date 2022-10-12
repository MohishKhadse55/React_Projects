import React, { useState, useEffect } from "react";

// authcontext is aobject that will contain the component
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, // only for the better ide autocompletion it is used the real function is provided by the authcontext.provider in app
    onLogin: (email, password) => {},
});

// pulling out the logic from  the app.js and and makign the seperate logic for authentication functionality
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // this is used as a condition
    useEffect(() => {
        const storedUserInformationLoggedIn = localStorage.getItem("isLoggedIn");
        if (storedUserInformationLoggedIn === "1") {
            setisLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setisLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setisLoggedIn(true);
    };
    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.childern}
        </AuthContext.Provider>
    );
};

export default AuthContext;
