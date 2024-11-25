import { getPost, getPostPaths, parsePostFileName } from "@/lib/post";
import PostHeader from "@/components/post-detail/post-header";
import PostBody from "@/components/post-detail/post-body";

export const dynamicParams = false;

export function generateStaticParams() {
  const postPaths = getPostPaths();
  return postPaths.map((postPath) => ({ slug: parsePostFileName(postPath) }));
}

type PostDetailPageProps = {
  params: { slug: string };
};

export default async function PostDetailPage({
  params: { slug },
}: PostDetailPageProps) {
  const post = await getPost(slug);

  return (
    <div className="prose dark:prose-invert container mx-auto max-w-[750px] mt-44 mb-16 flex flex-col p-2 px-6">
      <PostHeader post={post} />
      <PostBody post={post} />
    </div>
  );
}
