export default function Benefits() {
  const benefits = [
    {
      title: "Prirodna Ishrana",
      description: "BARF ishrana je najprirodniji način hranjenja psa, koji odgovara njihovoj evoluciji.",
      icon: "🌿"
    },
    {
      title: "Kvalitetno Meso",
      description: "Koristimo samo najkvalitetnije meso od pouzdanih dobavljača.",
      icon: "🥩"
    },
    {
      title: "Besplatna Dostava",
      description: "Besplatna dostava za narudžbine preko 10.000 RSD u svim zonama.",
      icon: "🚚"
    },
    {
      title: "Fleksibilno Pakovanje",
      description: "Mogućnost izbora različitih pakovanja prema potrebama vašeg psa.",
      icon: "📦"
    }
  ];

  return (
    <section className="py-20 bg-[var(--gray-800)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Zašto Izabrati <span className="text-gradient">Nas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pružamo najbolje rešenje za prirodnu ishranu vašeg ljubimca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover-glow transition-all group"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 