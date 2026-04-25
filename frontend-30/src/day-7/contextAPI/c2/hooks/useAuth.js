import {  useContext } from "react";
import { AuthContext } from "../auth-context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    const { user, setUser } = context;

    const singUp = (name, email, password) => {
        const userKey = `user_${email}`;
        if (localStorage.getItem(userKey)) {
            alert("User already exists. Please log in.");
            return;
        }
        const newUser = { name, email, password };
        localStorage.setItem(userKey, JSON.stringify(newUser)); 
        setUser(newUser);
        alert("Signup successful!");
    }
    const logIn = (email, password) => {
        const userKey = `user_${email}`;
        const storedUser = localStorage.getItem(userKey);
        if (!storedUser) {
            alert("User not found. Please sign up.");
            return;
        }
        const user = JSON.parse(storedUser);
        if (user.password !== password) {
            alert("Invalid password.");
            return;
        }
        setUser(user);
        alert("Login successful!");
    }

    const logOut = () => {
        setUser(null);
        localStorage.removeItem(`user_${user.email}`);
        alert("You have been logged out.");
    }

    return { user, singUp, logIn, logOut };

}