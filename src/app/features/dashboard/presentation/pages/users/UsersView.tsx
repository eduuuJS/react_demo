import { useEffect, useState } from "react";
import UsersLoaderWidget from "./components/UsersLoaderWidget";
import UsersTable from "./components/UsersTable";
import { UsersController, useUsersController } from "./usersController";

export default function UsersView() {

    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: UsersController | null;
    const setController = useUsersController(state => state.setObject);


    useEffect(() => {

        controller = new UsersController();
        setController(controller);

        const initialize = async () => {
            setLoaderState(true)
            await controller?.initialize();
            setLoaderState(false)
        }

        initialize();

        return () => {
            setController(null);
        }
    }, [])


    return (
        <div className="bg-gray-100">
            {loaderState ? (
                <UsersLoaderWidget />
            ) : (
                <UsersTable />
            )}
        </div>
    )
}
