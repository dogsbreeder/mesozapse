import Header from '../../components/Header';
import { productMetadata } from '../../metadata';
import { notFound } from 'next/navigation';
import Image from '../../components/Image';

const products = {
  'pileca-prsa': {
    name: "Pileća prsa",
    package: "10kg pakovanje",
    price: "Cena na upit",
    description: "Nemasno i proteinima bogato meso idealno za pse kojima treba mršaviji protein.",
    benefits: [
      "Nemasno i proteinima bogato meso",
      "Idealno za pse kojima treba mršaviji protein",
      "Savršeno za štence i starije pse",
      "Lako svarljivo"
    ],
    image: "/images/pileca-prsa.jpg"
  },
  'juneci-miks': {
    name: "Juneći miks",
    package: "10kg pakovanje",
    price: "Cena na upit",
    description: "Bogat izvor proteina i gvožđa, sadrži različite delove junećeg mesa.",
    benefits: [
      "Bogat izvor proteina i gvožđa",
      "Sadrži različite delove junećeg mesa",
      "Idealan za aktivne pse",
      "Prirodni izvor B vitamina"
    ],
    image: "/images/juneci-miks.jpg"
  },
  'junetina-sa-kostima': {
    name: "Junetina sa kostima",
    package: "10kg pakovanje",
    price: "Cena na upit",
    description: "Prirodno čišćenje zuba i dodatni izvor kalcijuma.",
    benefits: [
      "Prirodno čišćenje zuba",
      "Dodatni izvor kalcijuma",
      "Pomaže održavanju zdrave vilice",
      "Obogaćeno kolagenom iz kostiju"
    ],
    image: "/images/junetina-sa-kostima.jpg"
  },
  'riba': {
    name: "Riba",
    package: "10kg pakovanje",
    price: "Cena na upit",
    description: "Bogata Omega-3 masnim kiselinama, idealna za zdravlje zglobova.",
    benefits: [
      "Bogata Omega-3 masnim kiselinama",
      "Pomaže razvoju mozga",
      "Prirodni anti-inflamatorni efekat",
      "Idealna za zdravlje zglobova"
    ],
    image: "/images/riba.jpg"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];
  if (!product) return {};
  return productMetadata(product.name);
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[var(--background)] pt-16">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{product.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="glass-effect rounded-2xl p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div className="glass-effect rounded-2xl p-8 hover-glow transition-all">
            <p className="text-[var(--accent)] mb-4">{product.package}</p>
            <p className="text-gray-400 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Prednosti:</h2>
              <ul className="list-disc pl-6 space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-300">{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[var(--accent)]">{product.price}</span>
              <a
                href="mailto:meso@pansionzapse.net"
                className="px-6 py-2 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors"
              >
                Naručite
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Informacije o dostavi</h2>
          <p className="text-gray-400 mb-4">
            Minimalna porudžbina je 10kg. Besplatna dostava za porudžbine preko 50kg.
          </p>
          <p className="text-gray-400">
            Dostavljamo širom Beograda. Za više informacija, kontaktirajte nas.
          </p>
        </div>
      </div>
    </main>
  );
} 