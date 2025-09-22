import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: {
        description: 'Section title (optional)',
      },
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Feature icon or image',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            description: 'Feature title',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          localized: true,
          admin: {
            description: 'Feature description',
          },
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        { label: '2 Columns', value: 'grid-2' },
        { label: '3 Columns', value: 'grid-3' },
        { label: '4 Columns', value: 'grid-4' },
      ],
      defaultValue: 'grid-3',
      admin: {
        description: 'How many columns to display features in',
      },
    },
  ],
}