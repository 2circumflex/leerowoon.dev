export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container mx-auto max-w-[1000px] mt-32 mb-16 flex flex-col p-2 px-6">
      <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
      {/* 블로그 게시글 내용이 들어갈 자리 */}
    </div>
  );
}
