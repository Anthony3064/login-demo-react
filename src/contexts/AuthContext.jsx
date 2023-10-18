import { createContext, useCallback, useMemo, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem("AUTH"))
    const login = useCallback(() => {
        window.localStorage.setItem("AUTH", true);
        setIsAuthenticated(true)
    }, [])

    const logout = useCallback(() => {
        window.localStorage.removeItem("AUTH");
        setIsAuthenticated(false)
    }, [])

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated
        }), [login, logout, isAuthenticated])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};