export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Petrović",
      role: "Vlasnik psa",
      content: "Moja Luna je mnogo srećnija i zdravija otkako je prešla na BARF ishranu. Kvalitet mesa je odličan!",
      image: "/testimonials/ana.jpg"
    },
    {
      name: "Marko Jovanović",
      role: "Vlasnik psa",
      content: "Besplatna dostava i odlična komunikacija. Preporučujem svima koji žele najbolje za svoje pse.",
      image: "/testimonials/marko.jpg"
    },
    {
      name: "Jelena Nikolić",
      role: "Veterinar",
      content: "Kao veterinar, preporučujem ovu uslugu svim klijentima koji žele prirodnu ishranu za svoje pse.",
      image: "/testimonials/jelena.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[var(--gray-900)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Šta Kažu Naši <span className="text-gradient">Klijenti</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pročitajte iskustva vlasnika pasa koji su izabrali našu uslugu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl hover-glow transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 