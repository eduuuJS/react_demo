import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/appRoutesNamed";
import SignUpView from "../pages/sign-up/SignUpView";
import SignInView from "../pages/sign-in/SignInView";

export default function AuthRouter() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path="/" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path={AppRoutesNamed.SIGNIN} element={<SignInView />} />
            <Route path={AppRoutesNamed.SIGNUP} element={<SignUpView />} />
        </Routes>
    )
}
