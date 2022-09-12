import { ChatBubbleOutline, FavoriteBorder, Publish, PublishOutlined, Repeat, ShareOutlined, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import './Feed.css';

function Post ({
  displayName,
  userName,
  verified,
  text,
  image,
  Avatar,
}){
    return (
      <div className="post">
        <div className="post-avatar">
          <Avatar />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                Display Name
                <span className="post-headerSpecial">
                  {verified && <VerifiedUser className="post-badge" />}
                  @{userName}
                </span>
              </h3>
            </div>
            <div className="post-header-Description">
              <p>{text}</p>
            </div>
            <img
              className="post-image"
              src={image}
              alt=""
            />
            <div className="post-footer">
              <ChatBubbleOutline />
              <Repeat />
              <FavoriteBorder />
              <PublishOutlined />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Post;