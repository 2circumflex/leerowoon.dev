import Image from "next/image";
import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";

import { Post } from "@/lib/types";

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-8 flex flex-row items-center gap-2">
        <FiCalendar className="size-4 text-gray-500" />
        <p className="text-sm text-gray-500">
          {dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일")}
        </p>
      </div>
      <Image
        className="mt-8 mb-10 w-full aspect-video object-cover rounded-lg border dark:border-none"
        src={post.thumbnail}
        alt={post.title}
        width={800}
        height={450}
      />
    </div>
  );
}
