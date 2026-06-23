import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Over mij', href: '#over' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Galerij', href: '#galerij' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-heading text-2xl font-semibold">
              Maison <span className="text-gold">Laurent</span>
            </p>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/70">
              Zelfstandig kok voor exclusieve culinaire belevingen op maat.
              Private dining, catering en bijzondere evenementen.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-sm border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-sm border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Navigatie
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contact
            </p>
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/75">
              <li>
                <a
                  href="tel:+31612345678"
                  className="transition-colors hover:text-gold"
                >
                  +31 6 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hallo@maisonlaurent.nl"
                  className="transition-colors hover:text-gold"
                >
                  hallo@maisonlaurent.nl
                </a>
              </li>
              <li>Heel Nederland &amp; België</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Maison Laurent. Alle rechten
            voorbehouden.
          </p>
          <p>Met passie bereid &middot; KvK 12345678</p>
        </div>
      </div>
    </footer>
  )
}
