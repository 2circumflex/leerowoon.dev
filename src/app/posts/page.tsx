import { getPostList } from "@/lib/post";

export default async function PostsPage() {
  const postlist = await getPostList();
  console.log(postlist);

  return (
    <div className="mx-auto mt-12 w-full max-w-[950px] px-4">
      <h1 className="text-3xl font-bold">Posts</h1>
      {/* 게시글 목록이 들어갈 자리 */}
    </div>
  );
}
