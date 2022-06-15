import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />

      <div className="main">
        <Layout className="BG1">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/" className="text-light">
              Cryptoverse Inc.
            </Link>{" "}
            <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/" className="text-light">
              Home
            </Link>
            <Link to="/exchanges" className="text-light">
              Exchanges
            </Link>
            <Link to="/news" className="text-light">
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
