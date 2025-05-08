"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="">
      <div className="h-[20px]"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-[900px]">
          <div className="flex h-14 items-center justify-between px-3">
            <Link
              href="/"
              className="ml-2 flex items-center text-lg font-bold text-gray-700 dark:text-gray-300"
              aria-label="홈으로 이동"
            >
              <span className="text-primary">leerowoon</span>.dev
            </Link>
            <nav>
              <ul className="flex items-center gap-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm transition-colors",
                        pathname === item.href
                          ? "text-black dark:text-white"
                          : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                      )}
                      aria-label={`${item.name} 페이지로 이동`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleThemeToggle}
                    className="ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                    aria-label={
                      theme === "dark"
                        ? "라이트 모드로 전환"
                        : "다크 모드로 전환"
                    }
                  >
                    {theme === "dark" ? (
                      <FiSun onClick={handleThemeToggle} />
                    ) : (
                      <FiMoon onClick={handleThemeToggle} />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
