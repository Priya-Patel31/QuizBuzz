import React from "react";
import { Medal1,Medal2,Medal3 } from "../../../assets/images";
import { Link } from "react-router-dom";
import { Achievements } from "./Achievements";


export const HeroSection = () => {
  return (
    <div className="main-content-section2-container p-1 flex-row">
     <Achievements/>
     
      
    </div>
  );
};
