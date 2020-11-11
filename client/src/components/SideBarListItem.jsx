import SideBarItem from "./SideBarItem";
import PropTypes from "prop-types";

const SideBarListItem = ({ items, onActive }) => {
  return (
    <div>
      {items.map((item, i) => {
        return <SideBarItem key={i} item={item} onActive={onActive} />;
      })}
    </div>
  );
};

SideBarListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      subItems: PropTypes.array,
    })
  ).isRequired,
};

export default SideBarListItem;
