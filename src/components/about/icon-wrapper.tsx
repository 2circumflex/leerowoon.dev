export default function IconWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-2 rounded-md border dark:border-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
      {children}
    </div>
  );
}
