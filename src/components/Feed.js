import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Post from "./Post";
import { db } from "../firebase";

function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    }); 
  }, []);
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
