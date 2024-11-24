import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          페이지를 찾을 수 없습니다 😅
        </h2>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-md hover:bg-foreground/10 transition-colors"
          tabIndex={0}
          aria-label="홈으로 이동"
        >
          홈으로 이동
        </Link>
      </div>
    </main>
  );
}
