import { getDescSortedPostList } from "@/lib/post";
import PostCard from "@/components/common/post-card";

interface PostListByTagProps {
  tag: string;
}

export default async function PostListByTag({ tag }: PostListByTagProps) {
  const postlist = await getDescSortedPostList();

  const filteredPostList = postlist.filter((post) => post.tags.includes(tag));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-8"># {tag}</h1>
      {filteredPostList.length > 0 && (
        <div className="flex flex-col gap-16">
          {filteredPostList.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
