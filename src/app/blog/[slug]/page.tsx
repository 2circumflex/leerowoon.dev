import Container from "@/components/ui/container";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
        {/* 블로그 게시글 내용이 들어갈 자리 */}
      </div>
    </Container>
  );
}
