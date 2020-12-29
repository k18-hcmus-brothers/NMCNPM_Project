import "../../Styles/Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const RoomSelectorTag = ({ roomType, id, status }) => {
  const getBackground = () => {
    if (status === "busy") return { backgroundColor: "rgb(68, 53, 206)" };
    else if (status === "dirty") return { backgroundColor: "#000" };
    return {};
  };

  const getIcon = () => {
    if (status === "busy") return faBed;
    else if (status === "dirty") return faUndo;
    return faCheckCircle;
  };

  return (
    <div className="room-selector-tag" style={getBackground()}>
      <div style={{ fontSize: "8px" }}>{roomType}</div>
      <div>{id}</div>
      <div>
        <FontAwesomeIcon icon={getIcon()} />
      </div>
    </div>
  );
};

export default RoomSelectorTag;
