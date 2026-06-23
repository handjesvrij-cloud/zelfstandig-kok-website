import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-chef.png"
        alt="Chef die een fijn gerecht opmaakt in een sfeervolle keuken"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-background">
        <p className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold animate-in fade-in slide-in-from-bottom-3 duration-1000">
          <span className="h-px w-8 bg-gold" />
          Private Chef
          <span className="h-px w-8 bg-gold" />
        </p>
        <h1 className="text-balance font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Exclusieve Culinaire Belevingen op Maat
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-background/85 sm:text-lg animate-in fade-in slide-in-from-bottom-5 duration-1000">
          Zelfstandig kok voor private dining, catering en bijzondere
          evenementen. Verfijnde gerechten, persoonlijke aandacht en
          onvergetelijke smaken — bereid op uw locatie.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <a
            href="#contact"
            className="w-full rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-2xl sm:w-auto"
          >
            Vraag een offerte aan
          </a>
          <a
            href="#diensten"
            className="w-full rounded-sm border border-background/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:border-background hover:bg-background/10 sm:w-auto"
          >
            Bekijk diensten
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-background/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  )
}
