
import { Avatar } from "@mui/material";
import React from "react";
import './Feed.css';


function Tweetbox () {
    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox-input">
            <Avatar src="https://twitter.cohttps://pbs.twimg.com/profile_images/1212365094/161351_597643132_6991583_q_400x400.jpgm/jarmir89/photohttps://pbs.twimg.com/profile_images/1212365094/161351_597643132_6991583_q_400x400.jpg" />
            <input type="text" placeholder="What's up?" />
          </div>
          <input
            className="tweetBox-imageInput"
            placeholder="optional: Enter image Url"
          />

          <button type="button" className="btn btn-primary">
            Tweet
          </button>
        </form>
      </div>
    );
}

export default Tweetbox;