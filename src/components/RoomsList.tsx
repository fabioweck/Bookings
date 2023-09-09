interface Props {
  entries: {
    id: number;
    date: string;
    room: string;
    start: string;
    end: string;
  }[];

  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
}

const RoomsList = ({ entries, handleClick }: Props) => {
  return (
    <div className="list-box">
      <div className="list-header">
        <div>Date</div>
        <div>Room</div>
        <div>Start</div>
        <div>End</div>
        <div></div>
      </div>
      {entries.map((item) => (
        <div className="list" key={item.id}>
          <div>{item.date}</div>
          <div>{item.room}</div>
          <div>{item.start}</div>
          <div>{item.end}</div>
          <button
            onClick={(e) => {
              handleClick(e, item.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="red"
              className="bi bi-calendar-x"
              viewBox="0 0 16 16"
            >
              <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
