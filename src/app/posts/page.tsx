import PostList from "@/components/posts/post-list";

export default async function PostsPage() {
  return (
    <div className="container mx-auto max-w-[1000px] mt-32 mb-16 flex flex-col p-2 px-6">
      <PostList />
    </div>
  );
}
