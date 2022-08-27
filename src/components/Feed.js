import React from "react";
import './Feed.css';
import Tweetbox from "./TweetBox";


function Feed(){
    return (
      <div className="feed">
       <div className="feed-header"> 
       <h2>Home</h2>
       <Tweetbox/>
       </div>
        {/*home*/}
        {/*Tweetbox*/}
        {/*post*/}
      </div>
    );
}

export default Feed;