import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className="content">
      <div className="text">
        <div className="title">Managing finances has never been easier.</div>
        <div className="subtitle">
          Do you want to take control of your money and achieve your financial
          goals?
        </div>
        <button className="sign-up" onClick={signInWithGoogle}>
          <img
            src="src\pages\auth\google-icon.png"
            className="google-icon"
            alt="google icon"
          />{" "}
          Sign up now with Google
        </button>
      </div>
      <img
        className="image"
        src="src\pages\auth\welcome.png"
        alt="welcome illustration image"
      />
    </div>
  );
};
export default Auth;
