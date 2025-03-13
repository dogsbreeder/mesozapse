import Header from '../../components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dostava Mesa za Pse u Novom Beogradu - Besplatna Dostava',
  description: 'Besplatna dostava mesa za pse u Novom Beogradu za porudžbine preko 10.000 RSD. Dostavljamo kvalitetno sirovo meso za vašeg ljubimca.',
  keywords: 'dostava mesa za pse novi beograd, besplatna dostava mesa za pse, dostava barf ishrane novi beograd, dostava prirodne hrane za pse',
  openGraph: {
    title: 'Dostava Mesa za Pse u Novom Beogradu - Besplatna Dostava',
    description: 'Besplatna dostava mesa za pse u Novom Beogradu za porudžbine preko 10.000 RSD. Dostavljamo kvalitetno sirovo meso za vašeg ljubimca.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'Meso za Pse Beograd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function NoviBeogradDelivery() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-16">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Dostava Mesa za Pse u Novom Beogradu</h1>
        
        <div className="glass-effect rounded-2xl p-8 hover-glow transition-all">
          <h2 className="text-2xl font-bold mb-6">Informacije o Dostavi</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Besplatna Dostava</h3>
              <p className="text-gray-400">
                Besplatna dostava za porudžbine preko 10.000 RSD u Novom Beogradu.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Minimalna Porudžbina</h3>
              <p className="text-gray-400">
                Minimalna količina za naručivanje je 5kg.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Vreme Dostave</h3>
              <p className="text-gray-400">
                Dostava se vrši u radnim danima (Pon - Pet) između 09:00 i 17:00.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Zona Dostave</h3>
              <p className="text-gray-400">
                Dostavljamo u svim delovima Novog Beograda, uključujući:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-400">
                <li>Blokovi</li>
                <li>Ledine</li>
                <li>Bežanija</li>
                <li>Bežanijska Kosa</li>
                <li>Dr Ivan Ribar</li>
                <li>Marija Bursać</li>
                <li>Starčevo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Naručite Sada</h2>
          <p className="text-gray-400 mb-6">
            Za naručivanje i više informacija o dostavi, kontaktirajte nas.
          </p>
          <a
            href="mailto:meso@pansionzapse.net"
            className="inline-block px-6 py-2 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors"
          >
            Kontaktirajte Nas
          </a>
        </div>
      </div>
    </main>
  );
} 