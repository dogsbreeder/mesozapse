import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Meso za Pse Beograd - Kvalitetno Sirovo Meso za Pse',
  description: 'Kvalitetno sirovo meso za pse u Beogradu dostupno u pakovanju od 10kg. Besplatna dostava za porudžbine preko 50kg na teritoriji Beograda. Prirodna sirova ishrana za vašeg ljubimca.',
  keywords: 'meso za pse beograd, sirovo meso za pse, barf ishrana, dostava mesa za pse, prirodna hrana za pse, pilece meso za pse, junetina za pse, umka meso za pse, kvalitetno meso za pse',
  openGraph: {
    title: 'Meso za Pse Beograd - Kvalitetno Sirovo Meso za Pse',
    description: 'Kvalitetno sirovo meso za pse u Beogradu dostupno u pakovanju od 10kg. Besplatna dostava za porudžbine preko 50kg na teritoriji Beograda.',
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

export const productMetadata = (productName: string): Metadata => ({
  title: `${productName} za Pse - Kvalitetno Sirovo Meso za Pse u Beogradu`,
  description: `${productName} za pse - Kvalitetno sirovo meso za pse u Beogradu dostupno u pakovanju od 10kg. Besplatna dostava za porudžbine preko 50kg na teritoriji Beograda. Prirodna sirova ishrana za vašeg ljubimca.`,
  keywords: `meso za pse beograd, sirovo meso za pse, barf ishrana, dostava mesa za pse, prirodna hrana za pse, ${productName.toLowerCase()} za pse, kvalitetno meso za pse`,
  openGraph: {
    title: `${productName} za Pse - Kvalitetno Sirovo Meso za Pse u Beogradu`,
    description: `${productName} za pse - Kvalitetno sirovo meso za pse u Beogradu dostupno u pakovanju od 10kg. Besplatna dostava za porudžbine preko 50kg na teritoriji Beograda.`,
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
}); 