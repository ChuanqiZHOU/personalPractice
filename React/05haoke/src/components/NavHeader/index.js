import React from "react";
import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'


NavHeader.propTypes = {
  children: PropTypes.string.isRequired,
  onDo: PropTypes.func
}
export default function NavHeader({children, onDo}) {
    const navigate = useNavigate();
    const defaultHandleClick = () => {
      navigate(-1);
    };

    return (
      <NavBar className="citylist-title" onBack={onDo ||defaultHandleClick}>
        {children}
      </NavBar>
    );
}

