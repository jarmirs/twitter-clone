import React from "react";
import "./Feed.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-SearchIcon">
        <input
          className="form-control mr-2"
          type="search"
          placeholder="Search Twitter"
          aria-label="Search"
        ></input>
      </div>
      <div className="widgets-Container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed
          tweetId="1563882906979913729"
          sourceType="profile"
          screenName="JIDsv"
          options={{ heights: 400 }}
        />

        <TwitterShareButton />
      </div>
    </div>
  );
}

export default Widgets;
