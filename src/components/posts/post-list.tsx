import Link from "next/link";
import dayjs from "dayjs";

import { getDescSortedPostList } from "@/lib/post";
import { Post } from "@/lib/types";
import { FixedSizeImgWithPlaceholder } from "@/components/fixed-size-img-with-placeholder";

export default async function PostList() {
  const postlist = await getDescSortedPostList();

  return (
    <div className="flex flex-col gap-16">
      {postlist.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <article className="w-full flex flex-row justify-between gap-6 md:gap-10 transition-colors group">
        <div className="flex flex-col flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-6">
            {post.desc}
          </p>
          <time className="mt-4 text-xs text-muted-foreground/70">
            {dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일")}
          </time>
        </div>
        <div className="w-[160px] md:w-[200px] shrink-0">
          <FixedSizeImgWithPlaceholder
            className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border dark:border-none"
            src={post.thumbnail}
            alt={post.title}
            width={280}
            height={158}
            priority={false}
          />
        </div>
      </article>
    </Link>
  );
};
