import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4 mb-2">
              <FaInstagram className="w-8 h-8" />
              <h2 className="text-2xl font-bold">InstaInsights</h2>
            </div>
            <p className="text-sm text-gray-400">Empowering your Instagram profile</p>
          </div>
          <div className="flex space-x-4">
            <Link className="text-gray-400 hover:text-white transition-colors duration-200" href="https://github.com/MatheusIshiyama">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              className="text-gray-400 hover:text-white transition-colors duration-200"
              href="https://www.linkedin.com/in/matheusishiyama"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">© 2024 Matheus Ishiyama | All rights reserved.</div>
      </div>
    </footer>
  );
}
