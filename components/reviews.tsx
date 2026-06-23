import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reviews = [
  {
    name: 'Sophie & Mark van Dijk',
    role: 'Private dining thuis',
    quote:
      'Een onvergetelijke avond. Laurent toverde onze eetkamer om tot een sterrenrestaurant. Elk gerecht was een kunstwerk en de service was vlekkeloos.',
  },
  {
    name: 'Emma de Vries',
    role: 'Bruiloft catering',
    quote:
      'De catering op onze bruiloft was het gesprek van de dag. Verse, prachtige gerechten en gasten die maar bleven napraten over de smaken.',
  },
  {
    name: 'Thomas Janssen',
    role: 'Bedrijfsevenement',
    quote:
      'Professioneel van begin tot eind. Onze internationale klanten waren onder de indruk. Precies de uitstraling die wij zochten.',
  },
  {
    name: 'Lisa Bakker',
    role: 'Kookworkshop',
    quote:
      'Wat een geweldige workshop! Leerzaam, gezellig en ontzettend lekker. Ons team praat er nog wekenlang over.',
  },
]

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-secondary py-24 text-secondary-foreground lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Reviews
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Wat gasten zeggen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              5,0 — gemiddeld uit 120+ beoordelingen
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal as="article" key={review.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-8 text-card-foreground shadow-sm transition-shadow duration-500 hover:shadow-lg">
                <div className="flex" aria-label="5 van 5 sterren">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty font-heading text-xl leading-relaxed text-foreground">
                  {`“${review.quote}”`}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
