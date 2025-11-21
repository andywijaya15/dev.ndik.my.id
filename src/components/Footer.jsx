export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">MyLogo</h2>
            <p className="text-gray-400 text-sm">Build awesome websites with React & TailwindCSS.</p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Hosting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
