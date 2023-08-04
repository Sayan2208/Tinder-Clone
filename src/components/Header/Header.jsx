import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {props.backButton ? (
        <IconButton onClick={()=> navigate(props.backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large"/>
        </IconButton>
      ): (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>
      )}
      <Link to="/">
      <img className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTQtIAuzopaRE5gJvgYKCP1lm0zh9XOIC3t-BHxRphi08ixERjafdQhUDarPwyoGPh2M&usqp=CAU"
        alt="Tinder Logo"
      />
      </Link>
      <Link to="/chat">
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
      </IconButton>
      </Link>
    </div>
  );
}

export default Header;
