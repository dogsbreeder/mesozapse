'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: "BARF Ishrana za Pse: Sve Što Treba da Znate o Prirodnoj Sirovoj Hrani",
      excerpt: "Saznajte zašto je prirodna ishrana najbolja opcija za vašeg psa i kako utiče na njegovo zdravlje.",
      date: "15. Mart 2024",
      readTime: "5 min",
      image: "/images/blog1.jpeg",
      slug: "/blog/barf-ishrana"
    },
    {
      title: "Kako Preći na BARF Ishranu",
      excerpt: "Korak po korak vodič za prebacivanje vašeg psa na prirodnu ishranu bez stresa.",
      date: "10. Mart 2024",
      readTime: "7 min",
      image: "/images/blog2.jpeg",
      slug: "/blog/kako-preci-na-barf"
    },
    {
      title: "Najčešća Pitanja o BARF Ishrani",
      excerpt: "Odgovori na najčešća pitanja o prirodnoj ishrani pasa i razbijanje mitova.",
      date: "5. Mart 2024",
      readTime: "6 min",
      image: "/images/blog3.jpeg",
      slug: "/blog/najcesca-pitanja"
    }
  ];

  return (
    <section className="py-20 bg-[var(--gray-800)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Blog o <span className="text-gradient">BARF Ishrani</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Korisni saveti i informacije o prirodnoj ishrani vašeg psa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-glow transition-all group"
            >
              <Link href={post.slug}>
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} čitanja</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors inline-flex items-center gap-2">
                    Pročitaj više
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 