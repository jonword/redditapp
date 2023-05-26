import Image from "next/image";
import React from "react";
import { FaArrowUp, FaArrowDown, FaRegCommentAlt } from "react-icons/fa";
import shortenNumber from "@/util/shortenNumber";

interface Props {
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
}

const PostCard = ({
  id,
  icon_img,
  display_name,
  subreddit_name_prefixed,
  author,
  title,
  thumbnail,
  post_hint,
  reddit_video,
  url,
  num_comments,
  ups,
}: Props) => {
  return (
    <div className="post-card" key={id}>
      <div className="post-details">
        <Image
          src={
            icon_img ||
            `https://www.redditinc.com/assets/images/site/reddit-logo.png`
          }
          alt={display_name}
          className="post-icon"
        />
        <p className="subreddit-name">{subreddit_name_prefixed}</p>
        <span>•</span>
        <p className="post-author">Posted by u/{author}</p>
      </div>
      <div className="title">
        <p>{title}</p>
        {thumbnail && post_hint === "image" ? (
          <div className="media-container">
            <Image src={url} className="post-media" alt="post" />
          </div>
        ) : (
          ""
        )}
        {post_hint === "hosted:video" ? (
          <div className="media-container">
            <video controls className="post-video">
              <source src={reddit_video} type="video/mp4" />
            </video>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="comment-container">
        <div className="comment-icon">
          <FaRegCommentAlt />
          <p>{num_comments}</p>
        </div>
        <div className="post-votes">
          <FaArrowUp />
          {ups}
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
