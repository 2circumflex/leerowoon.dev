import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

import { getDescSortedPostList } from "@/lib/post";
import { Post } from "@/lib/types";

export default async function PostList() {
  const postlist = await getDescSortedPostList();

  return (
    <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6">
      {postlist.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <article className="p-4 w-full flex flex-col rounded-lg border transition-colors group">
        <Image
          className="w-full aspect-video object-cover rounded-lg"
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={450}
          priority={false}
        />
        <h2 className="mt-3 text-2xl font-bold line-clamp-2 min-h-[3.5rem] leading-7 text-foreground group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h2>
        <p className="mt-3 text-muted-foreground line-clamp-2 min-h-[3rem] leading-6">
          {post.desc}
        </p>
        <time className="mt-4 text-xs text-muted-foreground/60">
          {dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일")}
        </time>
      </article>
    </Link>
  );
};
