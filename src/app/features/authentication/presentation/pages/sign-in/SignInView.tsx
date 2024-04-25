import { useNavigate } from "react-router-dom"
import { AppRoutesNamedFullPath } from "../../../../../routes/appRoutesNamed";

export default function SignInView() {

    const navigate = useNavigate();

    function signUp() {
        navigate(AppRoutesNamedFullPath.SIGNUP,
            {
                replace: true
            }
        );
    }

    return (
        <>
            <div>SignInView</div>
            <button onClick={signUp} className="bg-red-700 rounded-lg text-zinc-50 m-4 px-5 py-3">Sign up</button>
        </>
    )
}
