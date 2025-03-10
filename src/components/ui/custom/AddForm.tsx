import React from "react"
import {User} from "@/types"

interface AddUserProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddForm: React.FC<AddUserProps> = ({setUsers}) => {


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fm = new FormData(e.currentTarget);
    const name = fm.get("name") as string;
    const surname = fm.get("surname") as string;
    const age = Number(fm.get("age"));
    const phone = fm.get("phone") as string;

    if (! name || !surname ||  isNaN(age) || !(phone)) {
        alert("Заполните данные!");
        return;
    }

    const newUser: User = {
        id: Math.random(),
        name,
        surname,
        age,
        phone,
    };

    setUsers((prev) => [...prev, newUser]);
    e.currentTarget.reset();
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 h-full p-5 shadow">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg drop-shadow-md w-full max-w-md h-full p-"
      >
        <div className="mb-4 focus:outline-none outline-none">
          <input name="name" type="text" placeholder="Введите Имя" />
        </div>

        <div className="mb-4">
          <input name="surname" type="text" placeholder="Введите Фамилию" />
        </div>


        <div className="mb-4">
          <input name="age" type="number" placeholder="Введите Возраст" />
        </div>

        <div className="mb-4">
          <input name="phone" type="phone" placeholder="Введите Номер" />
        </div>

        <button
          type="submit"
          className="w-full bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-200 cursor-pointer"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default AddForm;
