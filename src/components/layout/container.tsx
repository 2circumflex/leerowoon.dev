export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto mt-24 p-4">{children}</div>;
}
