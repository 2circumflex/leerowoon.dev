import Link from "next/link";

import { getAllTags } from "@/lib/post";

export default async function TagList() {
  const tags = await getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground/70 mb-8">태그 목록</h1>
      <div className="mt-4 mb-0 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag} className="no-underline">
            <p className="mt-0 mb-0 text-sm text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800 rounded-full px-2.5 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              #{tag}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
