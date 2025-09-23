import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'subject',
    description: 'Contact form submissions from the website',
    defaultColumns: ['name', 'email', 'subject', 'status', 'submittedAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }: any) => {
      return user?.collection === 'users'
    },
    update: ({ req: { user } }: any) => {
      return user?.collection === 'users'
    },
    delete: ({ req: { user } }: any) => {
      return user?.collection === 'users'
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the person submitting the form',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        description: 'Email address for contact',
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      admin: {
        description: 'Subject line of the inquiry',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Full message content',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        description: 'When the form was submitted',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }: any) => {
            // Auto-set submission time if not already set
            if (!value && !siblingData.submittedAt) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  timestamps: true,
}