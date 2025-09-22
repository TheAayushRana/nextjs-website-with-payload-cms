import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      return user?.collection === 'users'
    },
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Site logo that appears in the header',
      },
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Navigation Links',
      localized: true,
      minRows: 1,
      maxRows: 8,
      admin: {
        description: 'Main navigation menu items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'Text to display for this navigation item',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            description: 'URL path (e.g., "/about", "/contact-us")',
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Open link in new tab/window',
          },
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call-to-Action Button',
      admin: {
        description: 'Primary action button in the header',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide the CTA button',
          },
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
          admin: {
            condition: (data: unknown, siblingData: { enabled: boolean }) => siblingData.enabled,
            description: 'Button text',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            condition: (data: unknown, siblingData: { enabled: boolean }) => siblingData.enabled,
            description: 'Button destination URL',
          },
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            {
              label: 'Primary',
              value: 'default',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
          ],
          defaultValue: 'default',
          admin: {
            condition: (data: unknown, siblingData: { enabled: boolean }) => siblingData.enabled,
            description: 'Button style variant',
          },
        },
      ],
    },
  ],
}