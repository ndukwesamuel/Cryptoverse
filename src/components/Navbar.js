import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

// import icon from "../images/cryptocurrency.png";
let icon =
  "https://seeklogo.com/images/C/circle-bitcoin-wallet-logo-7E16D767DF-seeklogo.com.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="d-flex">
          <Avatar src={icon} size="large" className="ii" />
          <Typography.Title level={2} className="logo">
            <Link to="/">CryptoWorld</Link>
          </Typography.Title>
        </div>
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <Link to="/">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
            </Link>

            <Link to="/cryptocurrencies">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cryptocurrencies
                </a>
              </li>
            </Link>

            <Link to="/news">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  News
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
