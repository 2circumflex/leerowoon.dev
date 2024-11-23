import { getPostList } from "@/lib/post";
import Container from "@/components/layout/container";

export default async function PostsPage() {
  const postlist = await getPostList();
  console.log(postlist);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Posts</h1>
      {/* 게시글 목록이 들어갈 자리 */}
    </Container>
  );
}
