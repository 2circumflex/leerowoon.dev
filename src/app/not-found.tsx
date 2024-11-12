import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 max-w-md">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          tabIndex={0}
          aria-label="홈으로 돌아가기"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
