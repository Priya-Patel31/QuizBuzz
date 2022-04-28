import React from "react";
import "./home.css";
import { Header } from "../../shared/header/Header";
import { Sidebar } from "../../shared/sidebar/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { UserDetailContainer } from "./components/UserDetailContainer";

export const Home = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-container flex-col p-2">
          <UserDetailContainer />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};
