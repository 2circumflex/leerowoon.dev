"use client";

import Link from "next/link";

import { HeadingItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useHeadingsObserver } from "@/hooks/useHeadingsObserver";

interface TOCSidebarProps {
  toc: HeadingItem[];
}

export default function TOCSidebar({ toc }: TOCSidebarProps) {
  const activeIdList = useHeadingsObserver("h2, h3");

  return (
    <aside className="not-prose hidden xl:block absolute -top-[200px] left-full -mb-[100px] h-[calc(100%+150px)]">
      <div className="sticky top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]">
        <div className="border-l px-4 py-2">
          <ul className="text-sm">
            {toc.map((item) => {
              const isH3 = item.indent === 1;
              const isIntersecting = activeIdList.includes(item.link);
              return (
                <li
                  key={item.link}
                  className={cn(
                    isH3 && "ml-3",
                    isIntersecting && "font-medium text-pink-600",
                    "py-1 transition"
                  )}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
