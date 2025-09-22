import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { CTASectionBlock } from '@/payload-types'

const CTASection = ({ data }: { data: CTASectionBlock }) => {
    const { title, description, buttons, video } = data;

    const videoUrl = typeof video === 'object' && video ? video.url : '';
    const videoAlt = typeof video === 'object' && video ? video.alt : title || 'CTA Video';

    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 p-20 bg-gray-100 rounded-4xl mb-20'>
            <div className='flex flex-col gap-4'>
                <h2 className='md:text-4xl font-bold'>{title}</h2>
                <p className='md:text-xl text-gray-500'>{description}</p>
                <div className='flex gap-8'>
                    {buttons && buttons.map((button) => (
                        <Button
                            key={button.id || button.label}
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
            </div>
            <div>
                {videoUrl && (
                    <Image src={videoUrl} alt={videoAlt} width={500} height={500} />
                )}
            </div>
        </div>
    )
}

export default CTASection