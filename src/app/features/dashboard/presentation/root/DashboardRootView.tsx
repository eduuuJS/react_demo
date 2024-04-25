import { useNavigate } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import { AppRoutesNamed } from "../../../../routes/appRoutesNamed";
import { useEffect } from "react";
import DashboardNavBar from "./components/DashboardNavbar";

export default function DashboardRootView() {

    const navigate = useNavigate();

    const onStorageChange = (e: StorageEvent) => {
        console.log(e);
        if (e.key === 'authState' && e.newValue === null) {
            navigate(AppRoutesNamed.AUTH, { replace: true });
        }
    };
    useEffect(() => {
        window.addEventListener('storage', onStorageChange);
        return () => {
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return (
        <>
            <DashboardNavBar />
            <DashboardRouter />
        </>
    )
}
