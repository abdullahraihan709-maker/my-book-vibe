'use client'

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Listed Books', href: '/listed-books' },
    { name: 'Pages to Read', href: '/pages-to-read' },
  ];

  const socials = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="mt-16 bg-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-extrabold text-gray-900">
              Book <span className="text-green-500">Vibe</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Discover, track, and share the books you love. Your cozy corner
              for everything reading.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-green-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Connect With Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:bg-green-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              hello@bookvibe.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} <span className="font-semibold text-gray-700">Book Vibe</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with <span className="text-green-500">♥</span> for readers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;