import { useEffect, useState } from "react";
import { SalesController, SalesStore, salesControllerProvider, salesStoreProvider } from "./sales_controller";

export default function SalesView() {
    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: SalesController | null;
    const setController = salesControllerProvider(state => state.setObject);
    let store: SalesStore | null;
    const setStore = salesStoreProvider(state => state.setObject);

    useEffect(() => {

        controller = new SalesController();
        setController(controller);

        store = new SalesStore();
        setStore(store);


        const initialize = async () => {
            setLoaderState(true)
            await controller?.initialize();
            setLoaderState(false)
        }
        initialize();

        return () => {
            setController(null);
            setStore(null);
        }
    }, [])


    return (
        <>
            {loaderState ? (
                <p>Loading...</p>
            ) : (
                <p>Content</p>
            )}
        </>
    )
}
