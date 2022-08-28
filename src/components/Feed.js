import React from "react";
import './Feed.css';
import Tweetbox from "./TweetBox";
import Post from './Post';


function Feed(){
    return (
      <div className="feed">
        {/*home*/}
        <div className="feed-header">
          <h2>Home</h2>
          {/*Tweetbox*/}
          <Tweetbox />
        </div>
        {/*post*/}
        <Post />
        <Post />
        <Post />
      </div>
    );
}

export default Feed;