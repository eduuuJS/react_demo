
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppRoutesNamed, AppRoutesNamedFullPath } from "../../../../../routes/appRoutesNamed";
import { AuthService } from "../../../../../shared/application/auth_service";

export default function DashboardNavBar() {

    const navigate = useNavigate();

    const logout = () => {
        AuthService.logout();
        navigate(AppRoutesNamed.AUTH, { replace: true });
    };

    return (
        <Navbar isBordered isBlurred={false}>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <NavLink to={AppRoutesNamedFullPath.USERS} replace={true} className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}>
                        Users
                    </NavLink>
                </NavbarItem>
                <NavbarItem >
                    <NavLink to={AppRoutesNamedFullPath.SALES} replace={true} className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}>Sales</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to={AppRoutesNamedFullPath.ARTICLES} replace={true} className={({ isActive }) => (isActive ? "text-primary font-bold" : "")}>Articles</NavLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button color="primary" href="#" variant="ghost" onClick={logout}>
                        LogOut
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
