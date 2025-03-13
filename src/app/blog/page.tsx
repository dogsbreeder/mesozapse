import Header from '../components/Header';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: "Prednosti BARF Ishrane",
      excerpt: "Otkrivamo zašto je prirodna ishrana najbolja opcija za vašeg psa i kako može poboljšati njegovo zdravlje.",
      date: "15. Mart 2024",
      readTime: "5 min",
      slug: "prednosti-barf-ishrane"
    },
    {
      title: "Kako Preći na BARF Ishranu",
      excerpt: "Korak po korak vodič za bezbolnu tranziciju vašeg psa na prirodnu ishranu.",
      date: "10. Mart 2024",
      readTime: "7 min",
      slug: "kako-preci-na-barf"
    },
    {
      title: "Najčešća Pitanja o BARF Ishrani",
      excerpt: "Odgovaramo na najčešća pitanja o prirodnoj ishrani pasa i razbijamo mitove.",
      date: "5. Mart 2024",
      readTime: "6 min",
      slug: "najcesca-pitanja-barf"
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] pt-16">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Blog o Mesu za Pse</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="glass-effect rounded-2xl p-6 hover-glow transition-all">
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-400 mb-6">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime} čitanja</span>
              </div>

              <Link 
                href={`/blog/${post.slug}`}
                className="mt-6 inline-block px-6 py-2 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors"
              >
                Pročitaj Više
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Želite li više informacija?</h2>
          <p className="text-gray-400 mb-6">
            Pratite naš blog za najnovije članke o prirodnoj ishrani pasa i BARF dijeti.
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