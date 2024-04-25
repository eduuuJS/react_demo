import { useEffect, useState } from "react";
import { ArticlesController, ArticlesStore, articlesControllerProvider, articlesStoreProvider } from "./articles_controller";
import { Card, Skeleton } from "@nextui-org/react";

export default function ArticlesView() {
    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: ArticlesController | null;
    const setController = articlesControllerProvider(state => state.setObject);
    let store: ArticlesStore | null;
    const setStore = articlesStoreProvider(state => state.setObject);

    useEffect(() => {

        controller = new ArticlesController();
        setController(controller);

        store = new ArticlesStore();
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
                <Card className="w-[200px] space-y-5 p-4" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
            ) : (
                <p>Content</p>
            )}
        </>
    )
}
