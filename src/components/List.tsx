import Entry from "./Entry";
import RoomsList from "./RoomsList";
import { useState, useEffect } from "react";

const List = () => {
  const [entry, setEntry] = useState<
    { id: number; date: string; room: string; start: string; end: string }[]
  >([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    await fetch("https://nodejs-bvc-rooms.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setEntry(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();

    const obj = { ident: id };

    await fetch("https://nodejs-bvc-rooms.onrender.com/delete_room", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Entry />
      <RoomsList entries={entry} handleClick={handleClick} />
    </>
  );
};

export default List;
