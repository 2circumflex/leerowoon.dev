export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto mt-12 max-w-[950px] px-4">{children}</div>
  );
}
