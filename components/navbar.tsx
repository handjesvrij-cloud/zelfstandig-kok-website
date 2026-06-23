'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Over mij', href: '#over' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Galerij', href: '#galerij' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md py-3'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className={cn(
            'font-heading text-2xl font-semibold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          Maison{' '}
          <span className={scrolled ? 'text-gold' : 'text-gold'}>Laurent</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'group relative text-sm font-medium tracking-wide transition-colors',
                  scrolled
                    ? 'text-foreground/80 hover:text-foreground'
                    : 'text-background/80 hover:text-background',
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-all hover:bg-gold/90 hover:shadow-lg lg:inline-flex"
        >
          Vraag offerte aan
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Sluit menu' : 'Open menu'}
          className={cn(
            'inline-flex items-center justify-center rounded-sm p-2 transition-colors lg:hidden',
            scrolled || open ? 'text-foreground' : 'text-background',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/40 bg-background transition-all duration-500 lg:hidden',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-gold px-4 py-3 text-center text-base font-semibold text-gold-foreground"
            >
              Vraag offerte aan
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
