export function SoluFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="space-y-3">
            <img
              src="/images/solu-logo-v2.png"
              alt="Solu"
              className="h-10 w-auto object-contain"
            />
            <p className="text-white/40 text-sm font-light">live well, feel great.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Why Solu", href: "#why-solu" },
              { label: "Our Story", href: "/our-story" },
              { label: "About", href: "#about" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Contact", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {["Instagram", "TikTok", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white/40 text-xs hover:text-white/80 transition-colors uppercase tracking-wider"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Solu. All rights reserved.</p>
          <p className="text-white/20 text-xs">Made with 🧡 for women everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
