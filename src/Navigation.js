import React from "react";
import { Link } from "react-router-dom";
import shopImage from "./126083.png";
import { connect } from "react-redux";

function Navigation(props) {
  let numOfCount =
    props.count > 0 ? <li className="form-control"> {props.count}</li> : "";
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav row col-md-12">
        <li className="col-md-2"></li>

        <Link to="/" className="col-md-1">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/Products" className="col-md-1">
          <li className="nav-link">Products</li>
        </Link>
        <Link to="/Shop" className="col-md-1">
          <li className="nav-link">Shop</li>
        </Link>
        <div className="col-md-5"></div>
        <div className="form-inline my-2 my-lg-0 float-right col-md-2">
          <Link to="/Shop">
            <img
              src={shopImage}
              alt="Logo"
              height="40px"
              width="40px"
              className="p-1"
            />
            {numOfCount}
          </Link>
        </div>
      </ul>
    </header>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Navigation);
