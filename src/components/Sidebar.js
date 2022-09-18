import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Home, HomeMax, Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Sidebar() {
  return (
    //Bem convention

    <div className="sidebar">
      <TwitterIcon className="sidebar-twitter-icon" />
      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={SearchIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="List" />
      <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions Icon={MoreHorizIcon} text="More" />

      <button type="button" className="btn btn-primary">
        Tweet
      </button>
    </div>
  );
}

export default Sidebar;
