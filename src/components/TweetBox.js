import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Feed.css";
import {db} from "../firebase";


function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("post").add({
      displayName: "jarmir89",
      userName: "jarmir smith",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      Avator:
        "",
    });
    setTweetImage('')
    setTweetMessage('')
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://twitter.cohttps://pbs.twimg.com/profile_images/1212365094/161351_597643132_6991583_q_400x400.jpgm/jarmir89/photohttps://pbs.twimg.com/profile_images/1212365094/161351_597643132_6991583_q_400x400.jpg" />
          <input 
          onChange={(e) => setTweetMessage(e.target.value)}
          type="text" placeholder="What's up?" />
        </div>
        <input
        onChange={(e) =>setTweetImage(e.target.value)}
          className="tweetBox-imageInput"
          placeholder="optional: Enter image Url"
        />

        <button onClick={sendTweet} type="button" className="btn btn-primary">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default Tweetbox;
