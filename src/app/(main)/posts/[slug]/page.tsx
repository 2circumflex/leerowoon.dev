import { getPost } from "@/lib/post";
import PostHeader from "@/components/posts/post-header";

export const dynamicParams = false;

type PostDetailPageProps = {
  params: { slug: string };
};

export default async function PostDetailPage({
  params: { slug },
}: PostDetailPageProps) {
  const post = await getPost(slug);

  return (
    <div className="container mx-auto max-w-[1000px] mt-44 mb-16 flex flex-col">
      <PostHeader post={post} />
    </div>
  );
}
