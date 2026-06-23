import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const images = [
  {
    src: '/images/gallery-1.png',
    alt: 'Verfijnd opgemaakt fine dining gerecht',
    span: 'lg:row-span-2',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Verse seizoensgebonden ingrediënten',
    span: '',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Chef die een gerecht afwerkt met een pincet',
    span: '',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'Sfeervol diner op locatie bij kaarslicht',
    span: 'lg:col-span-2',
  },
  {
    src: '/images/gallery-6.png',
    alt: 'Chef aan het werk in de keuken',
    span: '',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Elegant opgemaakt dessert met goudaccent',
    span: '',
  },
]

export function Gallery() {
  return (
    <section id="galerij" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Galerij
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Een blik op het werk
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Van de eerste snede tot het laatste bord — een impressie van
            gerechten, evenementen en momenten achter de schermen.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3">
          {images.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 70}
              className={`group relative overflow-hidden rounded-sm ${image.span}`}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
