import { Spinner } from "@nextui-org/react";

export default function UsersLoaderWidget() {
    return (
        <div className="flex justify-center items-center">
            <Spinner label="Loading..." color="success" />
        </div>
    )
}
