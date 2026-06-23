import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const services = [
  {
    title: 'Private Dining',
    image: '/images/service-private-dining.png',
    description:
      'Een exclusief meergangendiner bij u thuis. Verfijnde gerechten, perfecte wijnbegeleiding en service zonder dat u zich om iets hoeft te bekommeren.',
  },
  {
    title: 'Catering',
    image: '/images/service-catering.png',
    description:
      'Van intieme bijeenkomsten tot grote feesten. Smaakvolle, vers bereide gerechten op maat van uw gelegenheid en gezelschap.',
  },
  {
    title: 'Bedrijfsevenementen',
    image: '/images/service-events.png',
    description:
      'Maak indruk op klanten en collega’s met een culinaire ervaring die uw evenement naar een hoger niveau tilt — professioneel en stijlvol verzorgd.',
  },
  {
    title: 'Walking Dinners',
    image: '/images/service-walking-dinner.png',
    description:
      'Een dynamisch concept met een reeks verrassende gangetjes. Ideaal om gasten te laten mingelen terwijl ze culinair verwend worden.',
  },
  {
    title: 'Kookworkshops',
    image: '/images/service-workshop.png',
    description:
      'Leer de fijne kneepjes van het vak in een interactieve, gezellige workshop. Een unieke teambuilding of een bijzonder samenzijn met vrienden.',
  },
]

export function Services() {
  return (
    <section id="diensten" className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Diensten
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Culinaire ervaringen voor elke gelegenheid
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/70">
            Iedere dienst wordt volledig op maat samengesteld. Vertel mij uw
            wensen en ik creëer een belevenis die perfect bij u past.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="article" key={service.title} delay={i * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-card text-card-foreground shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-foreground"
                  >
                    Meer informatie
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal as="article" delay={services.length * 90}>
            <div className="flex h-full flex-col items-start justify-center rounded-sm border border-gold/30 bg-primary p-7">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-gold">
                Iets anders in gedachten?
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-primary-foreground/70">
                Elk concept is mogelijk. Laat het mij weten en samen creëren we
                een culinaire belevenis op maat.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-all hover:bg-gold/90"
              >
                Neem contact op
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
