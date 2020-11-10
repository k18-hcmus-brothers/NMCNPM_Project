import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

const SideBarItem = ({ item }) => {
  return (
    <Link to={item.link}>
      <div className="SideBarItem">
        <FontAwesomeIcon icon={faTasks} className="font-icon" />{" "}
        <b>{item.name}</b>
      </div>
    </Link>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SideBarItem;
