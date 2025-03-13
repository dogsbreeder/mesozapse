'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <About />
      <Testimonials />
      <Blog />
    </main>
  );
}
