import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--gray-800)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--accent)]">Meso za pse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors text-lg">
              Početna
            </Link>
            <Link href="/proizvodi" className="text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors text-lg">
              Proizvodi
            </Link>
            <Link href="/blog" className="text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors text-lg">
              Blog
            </Link>
            <Link href="/kontakt" className="text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors text-lg">
              Kontakt
            </Link>
            <Link
              href="mailto:meso@pansionzapse.net"
              className="hidden md:flex items-center px-6 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] transition-colors text-lg"
            >
              Naručite
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[var(--gray-300)] hover:text-[var(--accent)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors">
              Početna
            </Link>
            <Link href="/proizvodi" className="block px-3 py-2 text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors">
              Proizvodi
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors">
              Blog
            </Link>
            <Link href="/kontakt" className="block px-3 py-2 text-[var(--gray-300)] hover:text-[var(--accent)] transition-colors">
              Kontakt
            </Link>
            <Link
              href="mailto:meso@pansionzapse.net"
              className="block px-3 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] transition-colors text-center"
            >
              Naručite
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 