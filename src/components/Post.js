import { ChatBubbleOutline, FavoriteBorder, Publish, PublishOutlined, Repeat, ShareOutlined, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import './Feed.css';

function Post (){
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
                  <VerifiedUser className="post-badge" />
                  @username
                </span>
              </h3>
            </div>
            <div className="post-header-Description">
              <p>Message</p>
            </div>
            <img className="post-image"
              src="https://www.tarheeltimes.com/photos/unc_basketball_photos/photos/Michael_Jordan_UNC_Dunk.jpg"
              alt=""
            />
            <div className="post-footer">
                <ChatBubbleOutline/>
                <Repeat />
                <FavoriteBorder />
                <PublishOutlined/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Post;