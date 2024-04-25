import { useNavigate } from "react-router-dom";
import { AppRoutesNamedFullPath } from "../../../../../routes/appRoutesNamed";

export default function SignUpView() {
    const navigate = useNavigate();

    function signIn() {
        navigate(AppRoutesNamedFullPath.SIGNIN,
            {
                replace: true
            }
        );
    }

    return (
        <>
            <div>SignUpView</div>
            <button onClick={signIn} className="bg-lime-500 rounded-lg text-zinc-50 m-4 px-5 py-3">Sign In</button>
        </>
    )
}
