import Link from "next/link";

import { getDescSortedPostList } from "@/lib/post";
import PostCard from "@/components/common/post-card";

export default async function RecentPost() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">최근 포스트</h2>
        <Link href="/posts" className="text-md text-muted-foreground">
          더보기 →
        </Link>
      </div>
      <RecentPostList />
    </div>
  );
}

const RecentPostListCount = 3;

async function RecentPostList() {
  const postlist = await getDescSortedPostList();
  const recentPostList = postlist.slice(0, RecentPostListCount);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-16">
        {recentPostList.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
