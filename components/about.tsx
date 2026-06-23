import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '15+', label: 'Jaar ervaring' },
  { value: '500+', label: 'Verzorgde evenementen' },
  { value: '100%', label: 'Verse ingrediënten' },
]

export function About() {
  return (
    <section id="over" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Portrait */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/chef-portrait.png"
              alt="Portret van chef Laurent in koksbuis"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-sm border border-gold/40 bg-background px-7 py-5 shadow-xl sm:block lg:-right-6">
            <p className="font-heading text-3xl font-semibold text-gold">
              Laurent
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Uw private chef
            </p>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Over mij
            </p>
            <h2 className="text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Passie voor smaak, vakmanschap en gastvrijheid
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Al meer dan vijftien jaar leef ik voor de gastronomie. Wat
                begon als een fascinatie voor de keuken van mijn grootmoeder,
                groeide uit tot een carrière in toonaangevende restaurants —
                van klassieke Franse keukens tot moderne fine dining.
              </p>
              <p>
                Vandaag breng ik die ervaring rechtstreeks naar uw tafel. Als
                zelfstandig kok geloof ik dat een onvergetelijke maaltijd
                ontstaat uit drie ingrediënten: de allerbeste verse producten,
                ambachtelijke techniek en oprechte gastvrijheid.
              </p>
              <p>
                Elk gerecht stem ik persoonlijk af op uw wensen, het seizoen en
                de gelegenheid. Zo wordt iedere belevenis even uniek als de
                gasten aan tafel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
