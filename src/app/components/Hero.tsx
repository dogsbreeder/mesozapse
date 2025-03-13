'use client';

import Link from 'next/link';
import Image from './Image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--background)] to-[var(--gray-900)] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kvalitetno Sirovo Meso za Vašeg Psa
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Prirodna BARF ishrana dostupna u Beogradu. Kvalitetno sirovo meso za zdravlje vašeg ljubimca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="mailto:meso@pansionzapse.net"
                className="px-8 py-3 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors"
              >
                Naručite Sada
              </Link>
              <Link
                href="/proizvodi"
                className="px-8 py-3 border border-[var(--accent)] text-[var(--accent)] font-semibold rounded-lg hover:bg-[var(--accent)] hover:text-black transition-colors"
              >
                Pogledajte Proizvode
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-4">
              <Image
                src="/images/hero-product.jpeg"
                alt="Sveže sirovo meso za pse - BARF ishrana u Beogradu"
                width={600}
                height={400}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">10kg</h3>
            <p className="text-gray-400">Minimalna porudžbina</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">Besplatno</h3>
            <p className="text-gray-400">Dostava preko 50kg</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-[var(--accent)] mb-2">24/7</h3>
            <p className="text-gray-400">Dostupni za vaša pitanja</p>
          </div>
        </div>
      </div>
    </section>
  );
} 