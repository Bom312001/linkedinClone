import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>linkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("PAPA React is back", "Top new - 999 readers")}
      {newArticle("PAPA React is back", "Top new - 999 readers")}
      {newArticle("PAPA React is back", "Top new - 999 readers")}
      {newArticle("PAPA React is back", "Top new - 999 readers")}
      {newArticle("PAPA React is back", "Top new - 999 readers")}
      {newArticle("PAPA React is back", "Top new - 999 readers")}
    </div>
  );
}

export default Widgets;
