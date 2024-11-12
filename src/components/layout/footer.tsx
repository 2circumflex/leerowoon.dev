const Footer = () => {
  return (
    <footer className="border-t bg-white py-6">
      <div className="flex justify-center text-center text-sm text-gray-500">
        © {new Date().getFullYear()} 개발 블로그. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
