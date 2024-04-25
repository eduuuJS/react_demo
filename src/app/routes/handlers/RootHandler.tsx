import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../shared/domain/route_handler_state";
import { AuthService } from "../../shared/application/auth_service";
import { AppRoutesNamed } from "../appRoutesNamed";
import { Navigate } from "react-router-dom";

export default function RootHandler() {

    let [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = AuthService.getAuthState();
        setAuthState(state ? RouteHandlerState.MATCH : RouteHandlerState.NOMATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.AUTH} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
            }
        })()
    );
}
