import { Post } from "@/lib/types";
import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";

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
      <div className="w-full my-14 px-24 mx-auto">
        <hr className="w-full" />
      </div>
    </div>
  );
}
