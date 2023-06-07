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
  media: any;
  reddit_video: any;
  fallback_url: string;
  url: string;
  num_comments: number;
  ups: number;
};

const PostCard = (props: Post) => {
  return (
    <div
      className="post-card bg-white flex flex-col p-2 border border-gray-300 mb-2 w-full"
      key={props.id}
    >
      <div className="post-details flex items-center justify-start border-b gap-1 pl-1">
        <Image
          src={
            props.icon_img ||
            `https://www.redditinc.com/assets/images/site/reddit-logo.png`
          }
          alt={props.display_name}
          width={20}
          height={20}
        />
        <p className="subreddit-name text-sm font-bold">
          {props.subreddit_name_prefixed}
        </p>
        <span className="text-gray-400">•</span>
        <p className="post-author text-gray-500/80 text-sm">
          Posted by u/{props.author}
        </p>
      </div>
      <div className="title flex flex-col justify-center items-center text-base p-4">
        <p>{props.title}</p>
        {props.thumbnail && props.post_hint === "image" ? (
          <div className="media-container flex justify-center mt-2">
            <Image
              src={props.url}
              className="post-media w-full pb-2"
              alt="post"
              width={600}
              height={400}
            />
          </div>
        ) : (
          ""
        )}
        {props.post_hint === "hosted:video" ? (
          <div className="media-container flex justify-center">
            <video controls autoPlay={true} className="post-video" width="600">
              <source
                src={props.media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="comment-container flex justify-between items-center border-t px-1">
        <div className="comment-icon pt-2 flex items-center gap-2">
          <FaRegCommentAlt />
          <p className="text-sm">{props.num_comments}</p>
        </div>
        <div className="post-votes flex items-center pr-4 text-sm gap-2">
          <FaArrowUp />
          {props.ups}
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
