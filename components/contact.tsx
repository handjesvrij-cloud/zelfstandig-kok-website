'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

const details = [
  {
    icon: Phone,
    label: 'Telefoon',
    value: '+31 6 1234 5678',
    href: 'tel:+31612345678',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'hallo@maisonlaurent.nl',
    href: 'mailto:hallo@maisonlaurent.nl',
  },
  {
    icon: MapPin,
    label: 'Werkgebied',
    value: 'Heel Nederland & België',
    href: undefined,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Intro + details */}
          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Contact
              </p>
              <h2 className="text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Laten we uw belevenis creëren
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Vertel mij over uw gelegenheid, het aantal gasten en uw wensen.
                Binnen 24 uur ontvangt u een persoonlijke offerte op maat.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-10 space-y-5">
                {details.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-gold">
                      <item.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground transition-colors hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-11 items-center justify-center rounded-sm bg-secondary text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex size-11 items-center justify-center rounded-sm bg-secondary text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <FacebookIcon className="size-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100}>
            <div className="rounded-sm border border-border bg-card p-8 shadow-lg sm:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-8" />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-semibold">
                    Bedankt voor uw aanvraag
                  </h3>
                  <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                    Ik neem zo snel mogelijk — uiterlijk binnen 24 uur —
                    persoonlijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Naam" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className={inputClass}
                        placeholder="Uw naam"
                      />
                    </Field>
                    <Field label="Telefoon" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="06 ..."
                      />
                    </Field>
                  </div>

                  <Field label="E-mail" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="naam@voorbeeld.nl"
                    />
                  </Field>

                  <Field label="Type evenement" htmlFor="type">
                    <select id="type" name="type" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Maak een keuze
                      </option>
                      <option>Private Dining</option>
                      <option>Catering</option>
                      <option>Bedrijfsevenement</option>
                      <option>Walking Dinner</option>
                      <option>Kookworkshop</option>
                      <option>Anders</option>
                    </select>
                  </Field>

                  <Field label="Vertel over uw wensen" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Aantal gasten, datum, locatie en bijzonderheden..."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full rounded-sm bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg"
                  >
                    Vraag een offerte aan
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
