'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">O Nama</h3>
            <p className="text-gray-400 mb-4">
              Specijalizovani smo za distribuciju kvalitetnog sirovog mesa za pse u Beogradu.
              Pružamo prirodna rešenja za BARF ishranu vašeg ljubimca.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <a href="/proizvodi" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: meso@pansionzapse.net</li>
              <li>Adresa: Beograd, Srbija</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Pratite Nas</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571743946951"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--gray-800)] flex items-center justify-center hover:bg-[var(--gray-700)] transition-colors"
              >
                <Image
                  src="/images/fb.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--gray-800)] mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BARF Meso. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
} 