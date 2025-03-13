export default function Features() {
  const products = [
    {
      title: "Pileća Prsa",
      description: "Kvalitetno pileće meso u pakovanju od 10kg. Idealno za BARF ishranu.",
      icon: "🍗",
      benefits: ["Visok sadržaj proteina", "Lako probavljivo", "Prirodno"]
    },
    {
      title: "Junetina Mix",
      description: "Miks različitih delova junećeg mesa u pakovanju od 10kg.",
      icon: "🥩",
      benefits: ["Ravnoteža masti", "Bogato gvožđem", "Prirodno"]
    },
    {
      title: "Junetina sa Kostima",
      description: "Junetina sa kostima u pakovanju od 10kg. Odlično za dentalnu higijenu.",
      icon: "🦴",
      benefits: ["Prirodno čišćenje zuba", "Bogato kalcijumom", "Prirodno"]
    },
    {
      title: "Riba",
      description: "Kvalitetna riba u pakovanju od 10kg. Bogata omega-3 masnim kiselinama.",
      icon: "🐟",
      benefits: ["Bogato omega-3", "Odlično za kožu", "Prirodno"]
    }
  ];

  return (
    <section className="py-20 bg-[var(--gray-900)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Naši <span className="text-gradient">Proizvodi</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kvalitetno sirovo meso za vašeg ljubimca u različitim pakovanjima
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover-glow transition-all group"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 