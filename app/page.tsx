import PostCard, { Post } from "../components/posts/postcard";

async function getPosts() {
  const res = await fetch("https://www.reddit.com/r/popular.json");
  const posts = res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch posts. Try again!");
  }
  return posts;
}

export default async function Home() {
  const data: Post[] = await getPosts();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col my-16 max-w-[700px] w-full p-8 border border-gray-400">
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
