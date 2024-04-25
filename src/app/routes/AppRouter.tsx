import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "./appRoutesNamed";
import AuthHandler from "./handlers/auth/AuthHandler";
import DashboardHandler from "./handlers/dahsboard/DashboardHandler";
import RootHandler from "./handlers/RootHandler";

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path={AppRoutesNamed.ROOT} element={<RootHandler />} />
                <Route path={AppRoutesNamed.AUTH} element={<AuthHandler />} />
                <Route path={AppRoutesNamed.DASHBOARD} element={<DashboardHandler />} />
            </Routes>
        </Router>
    )
}
