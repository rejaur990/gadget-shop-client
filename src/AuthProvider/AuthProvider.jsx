import { createContext, useEffect, useState } from "react";
import {app} from "../firebase-config/firebase";
import {createUserWithEmailandPassword, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import Login from './../pages/Login';


export const AuthContext = createContext(null);

// const auth = getAuth(app);
const auth = getAuth(app);

const AuthProvider = (children) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const googleProvider = new GoogleAuthProvider();

const CreateUser = (email, password)=>{
return createUserWithEmailandPassword(auth, email, password);
};
const Login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email,password);
};

const Logout = ()=> {
return signOut(auth);
};

const GoogleLogin = ()=>{
    return signInWithPopup(auth, googleProvider);
};

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })
    return (()=>{
        return unsubscribe();
    },
    []
);
});

const authinfo = {
    user,
    loading,
    CreateUser,Login,Logout,GoogleLogin,
};

return <AuthContext.Provider value={authinfo}>
    {children}
</AuthContext.Provider>
};

export default AuthProvider;