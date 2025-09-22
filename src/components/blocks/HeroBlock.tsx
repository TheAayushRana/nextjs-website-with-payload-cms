import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroBlockProps {
  data: {
    title: string
    subtitle?: string
    backgroundImage?: {
      url: string
      alt?: string
    }
    buttons?: Array<{
      label: string
      url: string
      variant: 'default' | 'secondary' | 'outline'
      size: 'sm' | 'default' | 'lg'
    }>
    textAlignment?: 'left' | 'center' | 'right'
  }
}


export function HeroBlock({ data }: HeroBlockProps) {
  const { title, subtitle, backgroundImage, buttons, textAlignment = 'center' } = data
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const buttonAlignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.alt || title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className={cn('max-w-4xl mx-auto', alignmentClasses[textAlignment])}>
          <h1 className="text-4xl md:text-[55px] font-bold mb-6 text-black">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base md:text-lg mb-8 text-[#787878] max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          )}

          {buttons && buttons.length > 0 && (
            <div className={cn('flex gap-4 flex-wrap', buttonAlignmentClasses[textAlignment])}>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
                  size={button.size}
                  asChild
                >
                  <a href={button.url}>
                    {button.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}