"use client";

import Link from "next/link";
import { GoMoveToTop } from "react-icons/go";

import { HeadingItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useHeadingsObserver } from "@/hooks/useHeadingsObserver";

interface TOCSidebarProps {
  toc: HeadingItem[];
}

export default function TOCSidebar({ toc }: TOCSidebarProps) {
  const activeIdList = useHeadingsObserver("h2, h3");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside className="not-prose hidden xl:block absolute -top-[200px] left-full -mb-[100px] h-[calc(100%+150px)]">
      <div className="sticky top-[200px] z-10 ml-[5rem] mt-[200px] w-[200px]">
        <div className="border-l px-4 py-2">
          <ul className="text-sm">
            {toc.map((item, index) => {
              const isH3 = item.indent === 1;
              const isIntersecting = activeIdList.includes(item.link);
              return (
                <li
                  key={`${item.link}-${index}`}
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
        <button
          onClick={scrollToTop}
          className="mt-4 w-full flex items-center justify-center rounded-sm border border-foreground/50 p-2 text-foreground transition-colors hover:border-pink-600 hover:bg-pink-700 hover:text-white"
          aria-label="맨 위로 이동"
        >
          <GoMoveToTop size={16} />
          <span className="text-sm ml-2">맨 위로</span>
        </button>
      </div>
    </aside>
  );
}
