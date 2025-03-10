import "./App.css";
import SearchForm from "./components/ui/custom/SearchForm";
import UserTable from "./components/ui/custom/UserTable";
import AddForm from "./components/ui/custom/AddForm";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Persons from "./utils/Users";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(Persons);
  const [filtered, setFiltered] = useState(Persons);

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setFiltered(updatedUsers);
  };

  useEffect(() => {
    setFiltered([...users]);
  }, [users]);

  return (
    <div className="w-full h-[100%] text-black shadow">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <SearchForm users={users} setFiltered={setFiltered} />
          <UserTable users={filtered} onDelete={deleteUser} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <AddForm setUsers={setUsers} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
