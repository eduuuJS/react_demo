import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/appRoutesNamed";
import UsersView from "../pages/users/UsersView";
import SalesView from "../pages/sales/SalesView";
import ArticlesView from "../pages/articles/ArticlesView";

export default function DashboardRouter() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={AppRoutesNamed.USERS} />} />
            <Route path="/" element={<Navigate to={AppRoutesNamed.USERS} />} />
            <Route path={AppRoutesNamed.USERS} element={<UsersView />} />
            <Route path={AppRoutesNamed.SALES} element={<SalesView />} />
            <Route path={AppRoutesNamed.ARTICLES} element={<ArticlesView />} />
        </Routes>
    )
}
