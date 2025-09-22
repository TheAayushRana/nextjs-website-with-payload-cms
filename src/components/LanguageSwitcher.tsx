'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

interface Locale {
  code: string
  label: string
  flag: string
}

const locales: Locale[] = [
  {
    code: 'en',
    label: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'es',
    label: 'Español',
    flag: '🇪🇸',
  },
]

interface LanguageSwitcherProps {
  currentLocale: string
  className?: string
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentLocaleData = locales.find(locale => locale.code === currentLocale) || locales[0]

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'

    const newPath = newLocale === 'en'
      ? pathWithoutLocale
      : `/${newLocale}${pathWithoutLocale}`

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 text-sm font-medium ${className}`}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLocaleData.flag}</span>
          <span className="hidden md:inline">{currentLocaleData.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleLocaleChange(locale.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLocale === locale.code
                ? 'bg-accent text-accent-foreground'
                : ''
            }`}
          >
            <span className="text-lg">{locale.flag}</span>
            <span className="font-medium">{locale.label}</span>
            {currentLocale === locale.code && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function useCurrentLocale(): string {
  const pathname = usePathname()

  const localeMatch = pathname.match(/^\/([a-z]{2})/)

  return localeMatch ? localeMatch[1] : 'en'
}