import { User } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";

interface UserTableProps {
  users: Array<User>;
  onDelete: (id: number) => void; 
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          <TableHead>Surname</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead className="text-center w-[150px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.surname}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell className="flex justify-center gap-3">
              <FaUserEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
              <TiUserDelete
                className="cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => onDelete(user.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
