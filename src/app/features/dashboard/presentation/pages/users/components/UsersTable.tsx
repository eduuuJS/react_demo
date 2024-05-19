
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useUsersController } from "../usersController";
import { listUsersState } from "../users_states";

export default function UsersTable() {

    const controller = useUsersController(state => state.object);

    const list = listUsersState(state => state.users);
    // const quantity = quantityUsersState(state => state.quantity);

    const handleRowClick = () => {
        controller?.deleteLastUser();
    }


    return (

        <div className="flex flex-col p-4">
            <Button color="danger" variant="solid" onClick={handleRowClick} className="w-40 font-bold">
                Delete last user
            </Button>
            <div className="m-5 p-5 bg-white rounded-xl">
                <Table aria-label="Example static collection table" removeWrapper>
                    <TableHeader>
                        <TableColumn className="font-bold">NAME</TableColumn>
                        <TableColumn className="font-bold">ROLE</TableColumn>
                        <TableColumn className="font-bold">STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {list.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>
                                    <a href={user.role} target="blank">
                                        {user.role}
                                    </a>
                                </TableCell>
                                <TableCell>{user.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="mt-4 bg-gray-100 rounded-lg flex justify-between p-3 items-center">
                    <p>
                        1 - 11 de 10 paginas
                    </p>
                    <div className="flex items-center">
                        <p>Paginas</p>
                        <div className="mx-2 bg-white rounded-lg px-5 py-1">1</div>
                        <div className="mx-1 bg-gray-200 rounded-lg px-5 py-1">&lt;</div>
                        <div className="mx-1 bg-gray-200 rounded-lg px-5 py-1">&gt;</div>
                    </div>
                </div>
            </div>
            {/* <p className="font-bold text-lg mt-4">Total users: {quantity}</p> */}
        </div>
    )
}
