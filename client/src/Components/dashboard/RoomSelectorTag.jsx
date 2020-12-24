import "../../Styles/Dashboard.scss";

const RoomSelectorTag = ({ roomType, id, status }) => {
  return (
    <div className="room-selector-tag">
      <div style={{ fontSize: "8px" }}>{roomType}</div>
      <div>{id}</div>
      <div>{status}</div>
    </div>
  );
};

export default RoomSelectorTag;
