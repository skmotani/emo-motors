import Link from "next/link";

const footerLinks = {
  products: [
    { label: "IE3 & IE4 Premium Motors", href: "/products/ie3-ie4-motors" },
    { label: "VFD-Compatible Motors", href: "/products/vfd-compatible" },
    { label: "Textile Brake Motors", href: "/products/brake-motors" },
  ],
  applications: [
    { label: "Ring Twisters", href: "/applications/ring-twisters" },
    { label: "Winding Machines", href: "/applications/winding-machines" },
    { label: "Spinning & TFO", href: "/applications/spinning-tfo" },
  ],
  resources: [
    { label: "Engineering Hub", href: "/engineering" },
    { label: "Quality Lab", href: "/quality-lab" },
    { label: "CAD Downloads", href: "/engineering#cad" },
  ],
  company: [
    { label: "About Meera Industries", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Request Quote", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <span className="text-2xl font-bold">EMO</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Engineered for Motion – Precision Motors for Textile Excellence. 
              A brand by Meera Industries, delivering European-grade engineering standards.
            </p>
            <div className="flex gap-4">
              <span className="text-sm text-gray-500">ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Applications</h4>
            <ul className="space-y-2">
              {footerLinks.applications.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EMO by Meera Industries. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
