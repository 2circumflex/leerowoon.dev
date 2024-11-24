import { getPostList } from "@/lib/post";
import Link from "next/link";

export default async function PostsPage() {
  const postlist = await getPostList();

  return (
    <div className="container mx-auto max-w-[900px] mt-32 mb-16 flex flex-col p-2 px-6">
      {postlist.map((post) => (
        <Link href={`/posts/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}
