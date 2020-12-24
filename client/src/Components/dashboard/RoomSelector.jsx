import RoomSelectorTag from "./RoomSelectorTag";
import "../../Styles/Dashboard.scss";
import RoomSelectorContent from "./RoomSelectorContent";

const RoomSelector = () => {
  return (
    <div className="room-selector shadow-sm">
      <RoomSelectorTag id={404} roomType={"VVIP"} status={"busy"} />
      <RoomSelectorContent />
    </div>
  );
};

export default RoomSelector;
