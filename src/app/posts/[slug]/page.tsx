import Container from "@/components/layout/container";

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
      {/* 블로그 게시글 내용이 들어갈 자리 */}
    </Container>
  );
}
