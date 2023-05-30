import Image from "next/image";
import React from "react";
import { FaArrowUp, FaArrowDown, FaRegCommentAlt } from "react-icons/fa";
import shortenNumber from "@/util/shortenNumber";

export type Post = {
  id: number;
  icon_img: string;
  display_name: string;
  subreddit_name_prefixed: string;
  author: string;
  title: string;
  thumbnail: string;
  post_hint: string;
  reddit_video: any;
  url: string;
  num_comments: number;
  ups: number;
};

const PostCard = (props: Post) => {
  return (
    <div className="post-card" key={props.id}>
      <div className="post-details">
        <Image
          src={
            props.icon_img ||
            `https://www.redditinc.com/assets/images/site/reddit-logo.png`
          }
          alt={props.display_name}
          width={20}
          height={20}
          className="post-icon"
        />
        <p className="subreddit-name">{props.subreddit_name_prefixed}</p>
        <span>•</span>
        <p className="post-author">Posted by u/{props.author}</p>
      </div>
      <div className="title">
        <p>{props.title}</p>
        {props.thumbnail && props.post_hint === "image" ? (
          <div className="media-container">
            <Image
              src={props.url}
              className="post-media"
              alt="post"
              width={300}
              height={300}
            />
          </div>
        ) : (
          ""
        )}
        {props.post_hint === "hosted:video" ? (
          <div className="media-container">
            <video controls className="post-video">
              <source src={props.reddit_video} type="video/mp4" />
            </video>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="comment-container">
        <div className="comment-icon">
          <FaRegCommentAlt />
          <p>{props.num_comments}</p>
        </div>
        <div className="post-votes">
          <FaArrowUp />
          {props.ups}
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
