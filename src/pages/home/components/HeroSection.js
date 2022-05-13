import React from "react";
import { Achievements } from "./Achievements";
import { Categories } from "./Categories";


export const HeroSection = () => {
  return (
    <div className="main-content-section2-container p-1 flex-row">
     <Achievements/>
     <Categories/>
      
    </div>
  );
};
