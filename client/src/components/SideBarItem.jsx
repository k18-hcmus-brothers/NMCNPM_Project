import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SideBarListItem from "./SideBarListItem";

const SideBarItem = ({ item, onActive }) => {
  const getBasicContent = () => {
    return (
      <div
        className={getItemsClass()}
        style={getStyleActive()}
        onClick={() => {
          if (!item.isActive) onActive(item);
        }}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="font-icon"
          style={getStyleActive()}
        />{" "}
        <b style={getStyleActive()}>{item.name}</b>
      </div>
    );
  };

  const getStyleActive = () => (item.isActive ? styleActive : {});

  const getItemsClass = () => {
    let className = "SideBarItem";
    if (item.subItems !== undefined) return className + " dropdown-toggle";
    else return className;
  };

  const getItemComponent = () => {
    if (item.subItems === undefined)
      return <Link to={item.link}> {getBasicContent()} </Link>;
    else
      return (
        <div>
          <a
            data-toggle="collapse"
            aria-expanded="false"
            href="#subItems"
            aria-controls="subItems"
          >
            {getBasicContent()}
          </a>
          <div className="collapse ml-4" id="subItems">
            <SideBarListItem items={item.subItems} onActive={onActive} />
          </div>
        </div>
      );
  };

  return getItemComponent();
};

SideBarItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    subItem: PropTypes.array,
  }).isRequired,
};

const styleActive = {
  color: "white",
};

export default SideBarItem;
