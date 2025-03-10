import { useEffect, useState } from "react";
import { User } from "@/types";

interface SearchInputProps {
  users: Array<User>;
  setFiltered: (array: any) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ users, setFiltered }) => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    setFiltered(filtered);
    
  }, [search, users]);

  return (
    <form className="shadow">
      <input
        className="w-full"
        type="text"
        placeholder="search"
        name="search"
        onKeyUp={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
