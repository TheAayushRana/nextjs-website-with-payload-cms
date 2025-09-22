import type { CollectionConfig } from 'payload'
import { Hero } from '../../blocks/Hero'
import { Testimonials } from '@/blocks/Testimonials'
import { Features } from '@/blocks/Features'
import { CTASection } from '@/blocks/CTASection'
import { ContactForm } from '@/blocks/ContactForm'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path (e.g., "home", "about")',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Hero, Testimonials, Features, CTASection, ContactForm],
      admin: {
        description: 'Add flexible content blocks to build your page',
      },
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title for search engines',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO description for search engines',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Image for social media sharing',
          },
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
}
