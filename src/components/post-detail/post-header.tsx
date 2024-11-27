import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";

import { Post } from "@/lib/types";
import { FixedSizeImgWithPlaceholder } from "@/components/fixed-size-img-with-placeholder";

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="flex flex-row items-center gap-2">
        <FiCalendar className="size-4 text-gray-500" />
        <p className="text-sm text-gray-500">
          {dayjs(post.date).locale("ko").format("YYYY년 MM월 DD일")}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-2 gap-y-0">
        {post.tags.map((tag) => (
          <p
            key={tag}
            className="text-sm text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800 rounded-full px-2.5 py-1"
          >
            {tag}
          </p>
        ))}
      </div>
      <FixedSizeImgWithPlaceholder
        className="mt-8 mb-10 w-full aspect-video object-cover rounded-lg border dark:border-none"
        src={post.thumbnail}
        alt={post.title}
        width={700}
        height={395}
      />
    </div>
  );
}
