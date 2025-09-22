import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Section title (optional)',
      },
    },
    {
        name: 'testimonials',
        type: 'array',
        fields: [
            {
                name: 'name',
                type: 'text',
            },
            {
                name: 'designation',
                type: 'text',
            },
            {
                name: 'company',
                type: 'text',
            },
            {
                name: 'avatar',
                type: 'upload',
                relationTo: 'media',
            },
            {
                name: 'quote',
                type: 'text',
            },
        ],
    }
  ],
}