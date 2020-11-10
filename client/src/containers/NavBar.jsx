// @flow
import Logo from "../assets/brand/logo.png";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark sticky-top shadow rounded">
      <div className="navbar-brand">
        <img src={Logo} alt="" width="60" height="60" />
        <strong>Hotel Management</strong>
      </div>
    </div>
  );
};

export default NavBar;
