import type { Block } from 'payload'

export const CTAButton: Block = {
  slug: 'ctaButton',
  interfaceName: 'CTAButtonBlock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          admin: {
            width: '50%',
          },
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            width: '50%',
          },
          required: true,
        },
      ],
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Primary', value: 'default' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'size',
      type: 'select',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Default', value: 'default' },
        { label: 'Large', value: 'lg' },
      ],
      defaultValue: 'lg',
    },
  ],
}