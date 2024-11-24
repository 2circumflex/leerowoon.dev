import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-7 gap-3">
      <div className="flex flex-row gap-4">
        <Link
          href="https://github.com/2circumflex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/2circumflex/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
      <div className="flex justify-center text-center text-sm text-gray-500">
        © {new Date().getFullYear()} leerow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
