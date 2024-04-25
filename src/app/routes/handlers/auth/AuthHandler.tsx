import { useEffect, useState } from "react";
import { AuthService } from "../../../shared/application/auth_service";
import { RouteHandlerState } from "../../../shared/domain/route_handler_state";
import { Navigate } from "react-router-dom";
import { AppRoutesNamed } from "../../appRoutesNamed";
import AuthRootView from "../../../features/authentication/presentation/root/AuthRootView";

export default function AuthHandler() {

    let [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = AuthService.getAuthState();
        setAuthState(state ? RouteHandlerState.NOMATCH : RouteHandlerState.MATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <AuthRootView />;
            }
        })()
    );
}
