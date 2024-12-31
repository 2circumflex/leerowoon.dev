import { getDescSortedPostList } from "@/lib/post";
import PostCard from "@/components/common/post-card";
export default async function PostList() {
  const postlist = await getDescSortedPostList();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-16">
        {postlist.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
