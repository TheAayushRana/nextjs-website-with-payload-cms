import type { Block } from 'payload'
import { CTAButton } from './CTAButton'

export const CTASection: Block = {
  slug: 'cta-section',
  interfaceName: 'CTASectionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Section title (optional)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Section description (optional)',
      },
    },
    {
        name: 'buttons',
        type: 'array',
        fields: CTAButton.fields,
        maxRows: 2,
        admin: {
            description: 'CTA buttons (max 2)',
        },
    },
    {
        name: 'video',
        type: 'upload',
        relationTo: 'media',
        admin: {
          description: 'Video for the section (optional)',
        },
      },
  ],
}