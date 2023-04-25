import React from "react";
import "./Siderbar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recenItem = (topic) => (
    <div className="sidebar__recenItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://wallpaperaccess.com/full/1087337.jpg" alt="" />
        <Avatar src={user.photoURL} className="sidebar__avatar" />
        {/* <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.email[0]}
        </Avatar> // Nếu k có ảnh sẽ lấy chữu đàu tiên của email làm avatar*/}

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who view you</p>
          <p className="sidebar__statNumber">2,54</p>
        </div>
        <div className="sidebar__stat">
          <p>Views post</p>
          <p className="sidebar__statNumber">3,54</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Percent</p>
        {recenItem("reactjs")}
        {recenItem("desgin")}
        {recenItem("javascript")}
        {recenItem("nodejs")}
      </div>
    </div>
  );
}

export default Sidebar;
