import { useState } from "react";

const Entry = () => {
  const [date, setDate] = useState("");
  const [room, setRoom] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newObj = {
      date: date,
      room: room,
      start: start,
      end: end,
    };

    await fetch("https://nodejs-bvc-rooms.onrender.com/add_room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObj),
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <form
      className="entry-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        required
        type="date"
        className="date-input"
        placeholder="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        required
        type="text"
        className="room-input"
        placeholder="room"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <label>start</label>
      <input
        required
        type="time"
        className="start-input"
        value={start}
        onChange={(e) => {
          setStart(e.target.value);
        }}
      />
      <label>end</label>
      <input
        required
        type="time"
        className="end-input"
        placeholder="end"
        value={end}
        onChange={(e) => {
          setEnd(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Entry;
