'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { LanguageSwitcher, useCurrentLocale } from '@/components/LanguageSwitcher'
import type { Header as HeaderType } from '@/payload-types'

interface HeaderProps {
  headerData: HeaderType
}

export function Header({ headerData }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentLocale = useCurrentLocale()

  const { logo, navigation = [], ctaButton } = headerData

  const logoUrl = typeof logo === 'object' && logo?.url ? logo.url : ''
  const logoAlt = typeof logo === 'object' && logo?.alt ? logo.alt : 'Logo'

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              {logoUrl && (
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              )}
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navigation?.map((item, index) => (
                <Link
                  key={index}
                  href={item.url || '/'}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher currentLocale={currentLocale} />
              {ctaButton?.enabled && ctaButton.label && ctaButton.url && (
                <Button
                  asChild
                  variant={ctaButton.variant as "default" | "secondary" | "outline"}
                >
                  <Link href={ctaButton.url}>
                    {ctaButton.label}
                  </Link>
                </Button>
              )}
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      {logoUrl && (
                        <Image
                          src={logoUrl}
                          alt={logoAlt}
                          width={100}
                          height={32}
                          className="h-6 w-auto"
                        />
                      )}
                    </Link>
                  </div>

                  <nav className="flex flex-col space-y-4 py-4">
                    {navigation?.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url || '/'}
                        target={item.openInNewTab ? '_blank' : undefined}
                        rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="py-4 border-t">
                    <LanguageSwitcher currentLocale={currentLocale} className="w-full justify-start" />
                  </div>

                  {ctaButton?.enabled && ctaButton.label && ctaButton.url && (
                    <div className="py-4">
                      <Button
                        asChild
                        variant={ctaButton.variant as "default" | "secondary" | "outline"}
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href={ctaButton.url}>
                          {ctaButton.label}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}