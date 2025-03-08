import { useEffect, useState } from "react";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    setFiltered(filtered);
    
  }, [search]);

  return (
    <form>
      <input
        type="text"
        placeholder="search"
        name="search"
        onKeyUp={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
