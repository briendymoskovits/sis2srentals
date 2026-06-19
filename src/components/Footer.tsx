import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif text-gray-800 mb-4">Sis2Sis</h3>
            <p className="text-gray-600 italic text-sm">Sisters in Style</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collection" className="text-gray-600 hover:text-amber-700 text-sm">
                  Browse Collection
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-600 hover:text-amber-700 text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-700 text-sm">
                  About Chanie
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-700 text-sm">
                  Blog & Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-700 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-700 text-sm">
                  Donate a Gown
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-700 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <p className="text-gray-600 text-sm mb-4">Follow our journey</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-700"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-700"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rose-200 text-center">
          <p className="text-gray-600 text-sm italic mb-2">
            In honor of Chanie Katz — the girl who taught us to say Yay.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sis2Sis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
