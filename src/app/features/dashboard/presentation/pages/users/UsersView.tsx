import { useEffect, useState } from "react";
import UsersLoaderWidget from "./components/UsersLoaderWidget";
import UsersTable from "./components/UsersTable";
import { UsersController, UsersDataBox, useUsersController, useUsersDataBox } from "./usersController";

export default function UsersView() {

    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: UsersController | null;
    const setController = useUsersController(state => state.setObject);
    let dataBox: UsersDataBox | null;
    const setDataBox = useUsersDataBox(state => state.setObject);

    useEffect(() => {

        controller = new UsersController();
        setController(controller);

        dataBox = new UsersDataBox();
        setDataBox(dataBox);


        const initialize = async () => {
            setLoaderState(true)
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            await controller?.initialize(randomNumber);
            setLoaderState(false)
        }
        initialize();

        return () => {
            setController(null);
            setDataBox(null);
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
