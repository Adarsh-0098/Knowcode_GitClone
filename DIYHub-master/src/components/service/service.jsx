import React from "react";
import "./service.css";
import { useNavigate } from "react-router-dom";
import ce from "../../assets/ce.png";
import fr from "../../assets/fr.png";
import tt from "../../assets/tt.png";
import alert from "../../assets/alert.png";
import wheat from "../../assets/wheat.png";
import ce_icon from "../../assets/ce_icon.png";
import fr_icon from "../../assets/fr_icon.png";
import tt_icon from "../../assets/tt_icon.png";
import alerts_icon from "../../assets/alerts_icon.png";
import wheat_icon from "../../assets/wheat_icon.png";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="services">
      <div className="service" onClick={() => navigate("/AIDesignSuggestions")}>
        <img src={ce} alt="AI Suggestions" />
        <div className="caption">
          <img src={ce_icon} alt="AI Suggestions Icon" />
          <p>AI Suggestions</p>
        </div>
      </div>
      <div className="service" onClick={() => navigate("/ChairPage")}>
        <img src={fr} alt="Furniture Repair" />
        <div className="caption">
          <img src={fr_icon} alt="Furniture Repair Icon" />
          <p>Furniture Repair</p>
        </div>
      </div>
      <div className="service">
        <img src={tt} alt="Tutorials" />
        <div className="caption">
          <img src={tt_icon} alt="Tutorials Icon" />
          <p>Tutorials</p>
        </div>
      </div>
      <div className="service">
        <img src={alert} alt="Alerts" />
        <div className="caption">
          <img src={alerts_icon} alt="Alerts Icon" />
          <p>Alerts</p>
        </div>
      </div>
      <div className="service">
        <img src={wheat} alt="Sustainability" />
        <div className="caption">
          <img src={wheat_icon} alt="Sustainability Icon" />
          <p>Sustainability</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
