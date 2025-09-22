import React from 'react'
import { AnimatedTestimonials } from '../ui/animated-testimonials'
import { TestimonialsBlock } from '@/payload-types'

const TestimonialBlock = ({ data }: { data: TestimonialsBlock }) => {
  const { title, testimonials } = data;

  if(!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-xl md:text-5xl font-bold text-center mb-4">{title}</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default TestimonialBlock