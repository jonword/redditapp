import { useState } from "react";
import PostCard, { Post } from "../components/posts/postcard";

async function getPosts() {
  const res = await fetch("https://www.reddit.com/r/popular.json");
  const data = await res.json();
  const posts: Post[] = data.data.children.map((post: any) => post.data);

  if (!res.ok) {
    throw new Error("Failed to fetch posts. Try again!");
  }
  return posts;
}

export default async function Home() {
  const data: Post[] = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4 px-24">
      <div className="flex flex-col min-w-[375px] max-w-[700px] w-full p-8">
        {data.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              icon_img={post.icon_img}
              display_name={post.display_name}
              subreddit_name_prefixed={post.subreddit_name_prefixed}
              author={post.author}
              title={post.title}
              thumbnail={post.thumbnail}
              post_hint={post.post_hint}
              reddit_video={post.reddit_video}
              url={post.url}
              num_comments={post.num_comments}
              ups={post.ups}
            />
          );
        })}
      </div>
    </main>
  );
}
