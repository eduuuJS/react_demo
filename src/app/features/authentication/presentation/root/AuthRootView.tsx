import { useNavigate } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import { AppRoutesNamed } from "../../../../routes/appRoutesNamed";
import { AuthService } from "../../../../shared/application/auth_service";

export default function AuthRootView() {

    const navigate = useNavigate();

    function handleLogin() {
        AuthService.login();
        navigate(AppRoutesNamed.DASHBOARD,
            {
                replace: true
            }
        );
    }

    return (
        <>
            <div>AuthRootView</div>
            <AuthRouter />

            <button onClick={handleLogin}>Login</button>
        </>
    )
}
