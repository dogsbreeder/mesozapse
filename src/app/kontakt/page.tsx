import Header from '../components/Header';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-16">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Kontaktirajte Nas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Informacije</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Adresa</h3>
                <p className="text-gray-400">Beograd, Srbija</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:meso@pansionzapse.net" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                  meso@pansionzapse.net
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Pošaljite Poruku</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Ime i Prezime</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[var(--gray-800)] border border-[var(--gray-700)] rounded-lg focus:outline-none focus:border-[var(--accent)]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[var(--gray-800)] border border-[var(--gray-700)] rounded-lg focus:outline-none focus:border-[var(--accent)]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-[var(--gray-800)] border border-[var(--gray-700)] rounded-lg focus:outline-none focus:border-[var(--accent)]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Poruka</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[var(--gray-800)] border border-[var(--gray-700)] rounded-lg focus:outline-none focus:border-[var(--accent)]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-[var(--accent-light)] transition-colors"
              >
                Pošaljite Poruku
              </button>
            </form>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Dostava</h2>
          <p className="text-gray-400 mb-6">
            Besplatna dostava preko 5 paketa odnosno 50kg.
          </p>
          <p className="text-gray-400">
            Minimalna količina za naručivanje je 10kg.
          </p>
        </div>
      </div>
    </main>
  );
} 