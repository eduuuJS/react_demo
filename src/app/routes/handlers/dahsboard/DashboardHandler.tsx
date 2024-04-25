import { useEffect, useState } from "react";
import { AuthService } from "../../../shared/application/auth_service";
import { RouteHandlerState } from "../../../shared/domain/route_handler_state";
import { Navigate } from "react-router-dom";
import { AppRoutesNamed } from "../../appRoutesNamed";
import DashboardRootView from "../../../features/dashboard/presentation/root/DashboardRootView";

export default function DashboardHandler() {

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
                    return <DashboardRootView />;
            }
        })()
    );
}
