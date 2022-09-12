import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tweetbox from "./TweetBox";
import Post from "./Post";
import { db } from "../firebase";
import FlipMove from "react-flip-move";


function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
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
      <FlipMove>
        {post.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
